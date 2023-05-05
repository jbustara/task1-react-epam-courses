import { createSlice } from '@reduxjs/toolkit';
import { getCourses } from '../../services';

const initialState = {
	allCourses: [],
	filteredCourses: [],
};

const courseSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		filterCourses: (state, { payload }) => {
			const query = payload;
			state.filteredCourses = state.allCourses.filter(
				(course) =>
					course.title.toLowerCase().includes(query.toLowerCase()) ||
					course.id.toLowerCase().includes(query.toLowerCase())
			);
		},
		createCourse: (state, { payload }) => {
			state.allCourses.push(payload);
			state.filteredCourses.push(payload);
		},
		deleteCourse: (state, { payload }) => {
			console.log('payload :>> ', payload);
			console.log('state.allCourses :>> ', state.allCourses);
			state.allCourses = state.allCourses.filter(
				(course) => course.id !== payload
			);
			console.log('state.allCourses :>> ', state.allCourses);
			state.filteredCourses = state.filteredCourses.filter(
				(course) => course.id !== payload
			);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCourses.fulfilled, (state, action) => {
			state.allCourses = action.payload.result;
			state.filteredCourses = action.payload.result;
		});
	},
});

export const { filterCourses, createCourse, deleteCourse } =
	courseSlice.actions;
export default courseSlice.reducer;
