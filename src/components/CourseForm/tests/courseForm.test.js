import React from 'react';
import {
	render,
	act,
	screen,
	fireEvent,
	waitFor,
} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import authorReducer from '../../../store/authors/authorSlice';
import courseReducer from '../../../store/courses/courseSlice';
import userReducer from '../../../store/user/userSlice';
import {
	mockAdmin,
	mockedStateAdmin,
	mockedStateUser,
	mockedStoreAdmin,
} from '../../../mocks/data-test.mock';
import CourseForm from '../../CourseForm/CourseForm';
import { EMPTY_AUTHOR_LIST } from '../../../constants';
import { createAuthor } from '../../../services';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import fetchMock from 'fetch-mock';

test('CourseForm should show authors lists (all and course authors).', () => {
	const { container } = render(
		<Provider store={mockedStoreAdmin}>
			<MemoryRouter initialEntries={['/courses/add']}>
				<Routes>
					<Route
						path='courses/add'
						element={<CourseForm type='Add new course' />}
					/>
				</Routes>
			</MemoryRouter>
		</Provider>
	);

	//3 authors

	const authorElements = container.querySelectorAll('.author');
	expect(authorElements.length).toBe(
		mockedStateUser.authors.listFiltered.length
	);
	const infoAuthors = container.querySelector('.col2');
	const infoAuthorsCourse = infoAuthors.querySelector('p');

	expect(infoAuthorsCourse).toBeInTheDocument();
	expect(infoAuthorsCourse.textContent).toBe(EMPTY_AUTHOR_LIST);
});

test('CourseForm "Create author" click button should call dispatch', async () => {
	localStorage.setItem('token', mockAdmin.token);
	fetchMock.post('http://localhost:4000/authors/add', {
		status: 201,
		body: {
			successful: true,
			result: {
				name: 'John Doe',
				id: 'test-id-author-123',
			},
		},
	});

	const mockedStore = configureStore({
		reducer: {
			authors: authorReducer,
			courses: courseReducer,
			user: userReducer,
		},
		preloadedState: mockedStateAdmin,
	});

	const { container } = render(
		<Provider store={mockedStore}>
			<MemoryRouter initialEntries={['/courses/add']}>
				<Routes>
					<Route
						path='courses/add'
						element={<CourseForm type='Add new course' />}
					/>
				</Routes>
			</MemoryRouter>
		</Provider>
	);
	const nameAuthor = screen.getByLabelText('Author name');
	act(() => {
		fireEvent.change(nameAuthor, { target: { value: 'John Doe' } });
	});
	const buttonCreateAuthor = container.querySelectorAll('.btn');
	buttonCreateAuthor.forEach((button) => {
		if (button.textContent === 'Create author') {
			act(() => {
				fireEvent.click(button);
			});
		}
	});
	await waitFor(() => {
		expect(mockedStore.getState().authors.list.length).toBe(4);
	});
	expect(mockedStore.getState().authors.list[3].name).toBe('John Doe');
	localStorage.removeItem('token');
});

test('CourseForm "Add author" button click should add an author to course authors list', async () => {
	localStorage.setItem('token', mockAdmin.token);
	const { container } = render(
		<Provider store={mockedStoreAdmin}>
			<MemoryRouter initialEntries={['/courses/add']}>
				<Routes>
					<Route
						path='courses/add'
						element={<CourseForm type='Add new course' />}
					/>
				</Routes>
			</MemoryRouter>
		</Provider>
	);
	//Adding 1 author to course list
	const buttonAddAuthor = container.querySelectorAll('.btn');
	for (const button of buttonAddAuthor) {
		if (button.textContent === 'Add author') {
			act(() => {
				fireEvent.click(button);
			});
			break;
		}
	}

	const authorComponent = screen.getByText((content, element) => {
		return (
			content.includes('Delete author') &&
			element.tagName.toLowerCase() === 'button'
		);
	});
	expect(authorComponent).toBeInTheDocument();
	localStorage.removeItem('token');
});

test('CourseForm "Delete author" button click should delete an author from the course list', async () => {
	localStorage.setItem('token', mockAdmin.token);
	const { container } = render(
		<Provider store={mockedStoreAdmin}>
			<MemoryRouter initialEntries={['/courses/add']}>
				<Routes>
					<Route
						path='courses/add'
						element={<CourseForm type='Add new course' />}
					/>
				</Routes>
			</MemoryRouter>
		</Provider>
	);
	//Adding 1 author to course list
	const buttonAddAuthor = container.querySelectorAll('.btn');
	for (const button of buttonAddAuthor) {
		if (button.textContent === 'Add author') {
			act(() => {
				fireEvent.click(button);
			});
			break;
		}
	}
	const authorComponent = screen.getByText((content, element) => {
		return (
			content.includes('Delete author') &&
			element.tagName.toLowerCase() === 'button'
		);
	});
	expect(authorComponent).toBeInTheDocument();
	//deleting 1 authorCourse
	fireEvent.click(authorComponent);
	//Couldnt be in the document after click delete
	expect(authorComponent).not.toBeInTheDocument();
	localStorage.removeItem('token');
});
