import API from "@/states/const";
import {getMovieDetailFailure, getMovieDetailProgress, getMovieDetailSuccess, getMovieDetail} from "@/states/feature/movie/getMovieDetail";
import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";

export default function* logInSaga() {
	yield all([getMovieDetailWatcher()]);
}
function* getMovieDetailWatcher() {
	yield takeLatest(getMovieDetail, getMovieDetailStatus);
}

function* getMovieDetailStatus(action) {
	try {
		yield put(getMovieDetailProgress());
		const getMovieDetailResponse = yield call(getMovieDetailWrapper, action.payload);
		yield put(getMovieDetailSuccess(getMovieDetailResponse));
	} catch (err) {
		yield put(getMovieDetailFailure(err));
	}
}

function* getMovieDetailWrapper(payload) {
	return yield new Promise((resolve, reject) => {
		axios
			.get(`${API.BACKEND_BASE_URL}${API.MOVIE}?id=${payload}`, {
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
