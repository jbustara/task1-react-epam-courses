import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Courses from '../Courses';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
	mockCourses,
	mockedStoreAdmin,
	mockedStoreUser,
	mockedStoreWithoutCourses,
} from '../../../mocks/data-test.mock';
import { act } from 'react-dom/test-utils';
import CourseForm from '../../CourseForm/CourseForm';

test('Courses should display amount of CourseCard equal length of courses array', () => {
	const { container } = render(
		<Provider store={mockedStoreUser}>
			<MemoryRouter initialEntries={['/']}>
				<Courses />
			</MemoryRouter>
		</Provider>
	);
	const courseCardElements = container.querySelectorAll('.courseCard');
	expect(courseCardElements.length).toBe(mockCourses.length);
});
test('Courses should display Empty container if courses array length is 0', () => {
	const { container } = render(
		<Provider store={mockedStoreWithoutCourses}>
			<MemoryRouter initialEntries={['/']}>
				<Courses />
			</MemoryRouter>
		</Provider>
	);
	const courseCardElements = container.querySelectorAll('.courseCard');
	expect(courseCardElements.length).toBe(0);
});
test('CourseForm should be showed after a click on a button "Add new course"', async () => {
	const { container } = render(
		<Provider store={mockedStoreAdmin}>
			<MemoryRouter initialEntries={['/courses']}>
				<Routes>
					<Route path='courses' element={<Courses />} />
					<Route path='courses/add' element={<CourseForm />} />
				</Routes>
			</MemoryRouter>
		</Provider>
	);

	const buttonNewCourse = container.querySelectorAll('.btn');
	buttonNewCourse.forEach((button) => {
		if (button.textContent === 'Add new course') {
			act(() => {
				fireEvent.click(button);
			});
		}
	});

	const courseFormElement = container.querySelector('.formCourse');
	expect(courseFormElement).toBeInTheDocument();
});
