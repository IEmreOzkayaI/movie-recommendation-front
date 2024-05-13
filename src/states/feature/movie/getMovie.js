import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: null,
	error: false,
	isLoading: false,
};

const reducers = {
	getMovieProgress: (state) => {
		state.isLoading = true;
		state.error = false;
		state.data = null;
	},
	getMovieFailure: (state, {payload}) => {
		state.isLoading = false;
		state.error = payload;
		state.data = null;
	},
	getMovieSuccess: (state, {payload}) => {
		state.isLoading = false;
		state.error = false;
		state.data = payload;
	},
	clearGetMovieInfo: (state) => {
		state.isLoading = false;
		state.error = false;
		state.data = null;
	},
};

const getMovieSlice = createSlice({
	name: "getMovieSlice",
	initialState,
	reducers,
});

export const getMovie = createAction("getMovieSlice/getMovie");
export const getMovieStatus = (state) => state?.getMovieSlice;

export const {getMovieProgress, getMovieFailure, getMovieSuccess, clearGetMovieInfo} = getMovieSlice.actions;
export default getMovieSlice.reducer;
