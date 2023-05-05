import { createSlice } from '@reduxjs/toolkit';
import { getAuthors } from '../../services';

const initialState = [];

const authorSlice = createSlice({
	name: 'author',
	initialState,
	reducers: {
		createAuthor: (state, { payload }) => {
			state.push(payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAuthors.fulfilled, (state, action) => {
			state.splice(0, state.length, ...action.payload.result);
		});
	},
});
export const { createAuthor } = authorSlice.actions;
export default authorSlice.reducer;
