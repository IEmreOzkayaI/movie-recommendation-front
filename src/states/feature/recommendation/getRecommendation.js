import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: null,
	error: false,
	isLoading: false,
};

const reducers = {
	getRecommendationProgress: (state) => {
		state.isLoading = true;
		state.error = false;
		state.data = null;
	},
	getRecommendationFailure: (state, {payload}) => {
		state.isLoading = false;
		state.error = payload;
		state.data = null;
	},
	getRecommendationSuccess: (state, {payload}) => {
		state.isLoading = false;
		state.error = false;
		state.data = payload;
	},
	clearGetRecommendationInfo: (state) => {
		state.isLoading = false;
		state.error = false;
		state.data = null;
	},
};

const getRecommendationSlice = createSlice({
	name: "getRecommendationSlice",
	initialState,
	reducers,
});

export const getRecommendation = createAction("getRecommendationSlice/getRecommendation");
export const getRecommendationStatus = (state) => state?.getRecommendationSlice;

export const {getRecommendationProgress, getRecommendationFailure, getRecommendationSuccess, clearGetRecommendationInfo} = getRecommendationSlice.actions;
export default getRecommendationSlice.reducer;
