import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	URL_COURSES,
	URL_GET_AUTHORS,
	URL_POST_AUTHORS,
	URL_GET_COURSES,
	URL_POST_COURSES,
	URL_GET_USER,
	URL_LOGOUT,
} from './constants';

export const getAuthors = createAsyncThunk('author/getAuthors', async () => {
	return fetch(URL_GET_AUTHORS)
		.then((resp) => resp.json())
		.catch((err) => console.log('err :>> ', err));
});
export const createAuthor = createAsyncThunk(
	'author/createAuthor',
	async ({ authorName, token }) => {
		return fetch(URL_POST_AUTHORS, {
			method: 'POST',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name: authorName }),
		})
			.then((resp) => resp.json())
			.catch((err) => console.log('err :>> ', err));
	}
);
export const getCourses = createAsyncThunk('courses/getCourses', async () => {
	return fetch(URL_GET_COURSES)
		.then((resp) => resp.json())
		.catch((err) => console.log('err :>> ', err));
});

export const deleteCourse = createAsyncThunk(
	'courses/deleteCourse',
	async ({ id, token }) => {
		return fetch(`${URL_COURSES}${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		})
			.then((resp) => resp.json())
			.catch((err) => console.log('err :>> ', err));
	}
);

export const createCourse = createAsyncThunk(
	'author/createCourse',
	async ({ courseNew, token }) => {
		return fetch(URL_POST_COURSES, {
			method: 'POST',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(courseNew),
		})
			.then((resp) => resp.json())
			.catch((err) => console.log('err :>> ', err));
	}
);

export const updateCourse = createAsyncThunk(
	'author/updateCourse',
	async ({ courseNew, token, courseId }) => {
		return fetch(`${URL_COURSES}${courseId}`, {
			method: 'PUT',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(courseNew),
		})
			.then((resp) => resp.json())
			.catch((err) => console.log('err :>> ', err));
	}
);

export const serverLogout = createAsyncThunk(
	'user/serverLogout',
	async (token) => {
		return fetch(URL_LOGOUT, {
			method: 'DELETE',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		})
			.then((resp) => resp.json())
			.catch((err) => console.log('err :>> ', err));
	}
);

export const getActualUser = createAsyncThunk(
	'user/getActualUser',
	async (token) => {
		return fetch(URL_GET_USER, {
			method: 'GET',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		})
			.then((resp) => resp.json())
			.catch((err) => console.log('err :>> ', err));
	}
);
