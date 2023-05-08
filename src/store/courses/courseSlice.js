import { createSlice } from '@reduxjs/toolkit';
import {
	deleteCourse,
	getCourses,
	createCourse,
	updateCourse,
} from '../../services';

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
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCourses.fulfilled, (state, action) => {
				if (action.payload.successful) {
					state.allCourses = action.payload.result;
					state.filteredCourses = action.payload.result;
				}
			})
			.addCase(deleteCourse.fulfilled, (state, action) => {
				const id = action.meta.arg.id;
				if (action.payload.successful) {
					state.allCourses = state.allCourses.filter(
						(course) => course.id !== id
					);
					state.filteredCourses = state.filteredCourses.filter(
						(course) => course.id !== id
					);
				}
			})
			.addCase(createCourse.fulfilled, (state, action) => {
				if (action.payload.successful) {
					state.allCourses.push(action.payload.result);
					state.filteredCourses.push(action.payload.result);
				}
			})
			.addCase(updateCourse.fulfilled, (state, action) => {
				const id = action.meta.arg.courseId;
				if (action.payload.successful) {
					state.allCourses = state.allCourses.filter(
						(course) => course.id !== id
					);
					state.allCourses.push(action.payload.result);
					state.filteredCourses = state.allCourses.filter(
						(course) => course.id !== id
					);
					state.filteredCourses.push(action.payload.result);
				}
			});
	},
});

export const { filterCourses } = courseSlice.actions;
export default courseSlice.reducer;
