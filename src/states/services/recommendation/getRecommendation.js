import API from "@/states/const";
import {getRecommendation, getRecommendationFailure, getRecommendationProgress, getRecommendationSuccess} from "@/states/feature/recommendation/getRecommendation";
import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";

export default function* logInSaga() {
	yield all([getRecommendationWatcher()]);
}
function* getRecommendationWatcher() {
	yield takeLatest(getRecommendation, getRecommendationStatus);
}

function* getRecommendationStatus(action) {
	try {
		yield put(getRecommendationProgress());
		const getRecommendationResponse = yield call(getRecommendationWrapper, action.payload);
		yield put(getRecommendationSuccess(getRecommendationResponse));
	} catch (err) {
		yield put(getRecommendationFailure(err));
	}
}

function* getRecommendationWrapper(payload) {
	return yield new Promise((resolve, reject) => {
		axios
			.get(`${API.BACKEND_BASE_URL}${API.RECOMMENDATION}`, {
				withCredentials: true,
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
			.then((res) => {
				const data = res.data;
				resolve(data);
			})
			.catch((err) => {
				reject(err.response.data);
			});
	});
}
