import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import signUpSlice from "../feature/auth/signup";
import signUpSaga from "../services/auth/signup";

import logInSlice from "../feature/auth/login";
import logInSaga from "../services/auth/login";

import getMovieSlice from "../feature/movie/getMovie";
import getMovieSaga from "../services/movie/getMovie";

import getMovieDetailSlice from "../feature/movie/getMovieDetail";
import getMovieDetailSaga from "../services/movie/getMovieDetail";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		logInSlice,
		signUpSlice,
		getMovieSlice,
		getMovieDetailSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(logInSaga);
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(getMovieSaga);
sagaMiddleware.run(getMovieDetailSaga);

export default store;
