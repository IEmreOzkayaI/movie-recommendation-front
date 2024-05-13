import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: null,
	error: false,
	isLoading: false,
};

const reducers = {
	getMovieDetailProgress: (state) => {
		state.isLoading = true;
		state.error = false;
		state.data = null;
	},
	getMovieDetailFailure: (state, {payload}) => {
		state.isLoading = false;
		state.error = payload;
		state.data = null;
	},
	getMovieDetailSuccess: (state, {payload}) => {
		state.isLoading = false;
		state.error = false;
		state.data = payload;
	},
	clearGetMovieDetailInfo: (state) => {
		state.isLoading = false;
		state.error = false;
		state.data = null;
	},
};

const getMovieDetailSlice = createSlice({
	name: "getMovieDetailSlice",
	initialState,
	reducers,
});

export const getMovieDetail = createAction("getMovieDetailSlice/getMovieDetail");
export const getMovieDetailStatus = (state) => state?.getMovieDetailSlice;

export const {getMovieDetailProgress, getMovieDetailFailure, getMovieDetailSuccess, clearGetMovieDetailInfo} = getMovieDetailSlice.actions;
export default getMovieDetailSlice.reducer;
