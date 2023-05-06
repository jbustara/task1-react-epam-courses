import { createSlice } from '@reduxjs/toolkit';
import { getAuthors, createAuthor } from '../../services';

const initialState = {
	list: [],
	listFiltered: [],
};

const authorSlice = createSlice({
	name: 'author',
	initialState,
	reducers: {
		updateFilteredAuthors: (state, { payload }) => {
			state.listFiltered = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAuthors.fulfilled, (state, { payload }) => {
				if (payload.successful) {
					state.list = payload.result;
					state.listFiltered = payload.result;
				}
			})
			.addCase(createAuthor.fulfilled, (state, { payload }) => {
				if (payload.successful) {
					state.list.push(payload.result);
					state.listFiltered.push(payload.result);
				}
			});
	},
});
export const { updateFilteredAuthors } = authorSlice.actions;

export default authorSlice.reducer;
