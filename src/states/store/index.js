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

import addRatingSlice from "../feature/rating/addRating";
import addRatingSaga from "../services/rating/addRating";

import getRecommendationSlice from "../feature/recommendation/getRecommendation";
import getRecommendationSaga from "../services/recommendation/getRecommendation";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		logInSlice,
		signUpSlice,
		getMovieSlice,
		addRatingSlice,
		getMovieDetailSlice,
		getRecommendationSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(logInSaga);
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(getMovieSaga);
sagaMiddleware.run(addRatingSaga);
sagaMiddleware.run(getMovieDetailSaga);
sagaMiddleware.run(getRecommendationSaga);

export default store;
