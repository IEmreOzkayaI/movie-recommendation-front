import API from "@/states/const";
import { getMovie, getMovieFailure, getMovieProgress, getMovieSuccess } from "@/states/feature/movie/getMovie";
import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

export default function* logInSaga() {
	yield all([getMovieWatcher()]);
}
function* getMovieWatcher() {
	yield takeLatest(getMovie, getMovieStatus);
}

function* getMovieStatus(action) {
	try {
		yield put(getMovieProgress());
		const getMovieResponse = yield call(getMovieWrapper, action.payload);
		yield put(getMovieSuccess(getMovieResponse));
	} catch (err) {
		yield put(getMovieFailure(err));
	}
}

function* getMovieWrapper(payload) {
	console.log("payload", payload);
	return yield new Promise((resolve, reject) => {
		axios
			.get(`${API.BACKEND_BASE_URL}${API.MOVIES}?page=${payload?.pagination ? payload?.pagination : ""}&title=${payload?.title ? payload?.title : ""}`, {
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
