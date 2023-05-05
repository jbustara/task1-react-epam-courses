import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL_GET_AUTHORS, URL_GET_COURSES } from './constants';

export const getAuthors = createAsyncThunk('author/getAuthors', async () => {
	return fetch(URL_GET_AUTHORS)
		.then((resp) => resp.json())
		.catch((err) => console.log('err :>> ', err));
});

export const getCourses = createAsyncThunk('courses/getCourses', async () => {
	return fetch(URL_GET_COURSES)
		.then((resp) => resp.json())
		.catch((err) => console.log('err :>> ', err));
});
