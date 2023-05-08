import { configureStore } from '@reduxjs/toolkit';
import { createCourse, getCourses } from '../../services';
import reducer from '../courses/courseSlice';
import {
	mockAdmin,
	mockCourseNew,
	mockCourses,
	mockUser,
} from '../../mocks/data-test.mock';

test('should return the initial state', () => {
	expect(reducer(undefined, { type: undefined })).toEqual({
		allCourses: [],
		filteredCourses: [],
	});
});
test('reducer should handle SAVE_COURSE and returns new state.', async () => {
	const initialState = {
		allCourses: [],
		filteredCourses: [],
	};
	const store = configureStore({
		name: 'courses',
		reducer,
		preloadedState: initialState,
	});

	//Initial state
	expect(store.getState().allCourses.length).toBe(0);
	//posting
	await store.dispatch(
		createCourse({ courseNew: mockCourseNew, token: mockAdmin.token })
	);
	//new state
	expect(store.getState().allCourses.length).toBe(1);
	expect(store.getState().allCourses[0].title).toBe(mockCourseNew.title);

	//posting with bad token
	await store.dispatch(
		createCourse({ courseNew: mockCourseNew, token: mockUser.token })
	);
	expect(store.getState().allCourses.length).toBe(1);
});
test('reducer should handle GET_COURSES and returns new state', async () => {
	const initialState = {
		allCourses: [],
		filteredCourses: [],
	};
	const store = configureStore({
		name: 'courses',
		reducer,
		preloadedState: initialState,
	});

	//Initial state
	expect(store.getState().allCourses.length).toBe(0);
	//gettin 2 courses in server
	await store.dispatch(getCourses());
	//new state: 2 courses
	expect(store.getState().allCourses.length).toBe(2);
	expect(store.getState().allCourses[0].title).toBe(mockCourses[0].title);
});
