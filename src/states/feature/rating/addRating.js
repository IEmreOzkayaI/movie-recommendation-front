import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: null,
	error: false,
	isLoading: false,
};

const reducers = {
	addRatingProgress: (state) => {
		state.isLoading = true;
		state.error = false;
		state.data = null;
	},
	addRatingFailure: (state, {payload}) => {
		state.isLoading = false;
		state.error = payload;
		state.data = null;
	},
	addRatingSuccess: (state, {payload}) => {
		state.isLoading = false;
		state.error = false;
		state.data = payload;
	},
	clearAddRatingInfo: (state) => {
		state.isLoading = false;
		state.error = false;
		state.data = null;
	},
};

const addRatingSlice = createSlice({
	name: "addRatingSlice",
	initialState,
	reducers,
});

export const addRating = createAction("addRatingSlice/addRating");
export const addRatingStatus = (state) => state?.addRatingSlice;

export const {addRatingProgress, addRatingFailure, addRatingSuccess, clearAddRatingInfo} = addRatingSlice.actions;
export default addRatingSlice.reducer;
