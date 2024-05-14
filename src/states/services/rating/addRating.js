import API from "@/states/const";
import {addRating, addRatingFailure, addRatingProgress, addRatingSuccess} from "@/states/feature/rating/addRating";
import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";

export default function* logInSaga() {
	yield all([addRatingWatcher()]);
}
function* addRatingWatcher() {
	yield takeLatest(addRating, addRatingStatus);
}

function* addRatingStatus(action) {
	try {
		yield put(addRatingProgress());
		const addRatingResponse = yield call(addRatingWrapper, action.payload);
		yield put(addRatingSuccess(addRatingResponse));
	} catch (err) {
		yield put(addRatingFailure(err));
	}
}

function* addRatingWrapper(payload) {
	return yield new Promise((resolve, reject) => {
		axios
			.post(
				`${API.BACKEND_BASE_URL}${API.RATING}`,
				{movieId: payload.movieId, rating: payload.rating},
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			)
			.then((res) => {
				const data = res.data;
				resolve(data);
			})
			.catch((err) => {
				reject(err.response.data);
			});
	});
}
