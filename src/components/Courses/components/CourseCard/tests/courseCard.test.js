import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseCard from '../CourseCard';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
	mockAuthors,
	mockCourses,
	mockedStoreUser,
} from '../../../../../mocks/data-test.mock';
import { pipeDuration } from '../../../../../helpers/pipeDuration';

let container;
beforeEach(() => {
	const { container: renderedContainer } = render(
		<Provider store={mockedStoreUser}>
			<MemoryRouter initialEntries={['/']}>
				<CourseCard {...mockCourses[0]} textButton='test' />
			</MemoryRouter>
		</Provider>
	);
	container = renderedContainer;
});
test('CourseCard should display title', () => {
	const descriptionSection = container.querySelector('.description');
	const title = container.querySelector('h1');

	expect(descriptionSection).toBeInTheDocument();
	expect(title.textContent).toEqual(mockCourses[0].title);
});

test('CourseCard should display description', () => {
	const descriptionSection = container.querySelector('.description');
	const description = container.querySelector('p');

	expect(descriptionSection).toBeInTheDocument();
	expect(description.textContent).toEqual(mockCourses[0].description);
});

test('CourseCard should display duration in format hh:mm', () => {
	const durationFormatted = pipeDuration(mockCourses[0].duration).toString();
	const duration = screen.getByText((content, element) => {
		return (
			content.includes(durationFormatted) &&
			element.tagName.toLowerCase() === 'span'
		);
	});

	expect(duration).toBeInTheDocument();
});

test('CourseCard should display authors list.', () => {
	const authorsSection = container.querySelector('.data');
	const authorsElements = authorsSection.querySelector('span');
	expect(authorsElements.textContent).toMatch(mockAuthors[0].name);
	expect(authorsElements.textContent).toMatch(mockAuthors[1].name);
});

test('CourseCard should display created date in the correct format.', () => {
	const creationDateElement = container.querySelector('.createdDateInfo');
	expect(creationDateElement.textContent).toMatch(
		/\b\d{1,2}\/\d{1,2}\/\d{4}\b$/
	);
});
