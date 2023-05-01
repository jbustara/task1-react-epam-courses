import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { generateDate } from './helpers/dateGenerator';

function App() {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authorList, setauthorList] = useState(mockedAuthorsList);
	const [isListing, setIsListing] = useState(true);
	const handlerSearchBar = (data) => {
		setCourses(
			courses.filter(
				(course) =>
					course.title.toLowerCase().includes(data.toLowerCase()) ||
					course.id.toLowerCase().includes(data.toLowerCase())
			)
		);
	};
	const createCourse = (course) => {
		const { title, description, duration, authors } = course;
		if (
			title === '' ||
			duration === '' ||
			description === '' ||
			authors.lenght === 0
		) {
			return alert('Please, fill in all fields');
		}
		if (title.length < 2) return alert('Title must have at least 2 characters');
		if (parseInt(duration) < 1)
			return alert('Duration must last at least 1 minute');
		if (authors.length === 0) return alert('Choose at least one author');

		setCourses([
			...courses,
			{
				id: uuidv4(),
				title: title,
				description: description,
				creationDate: generateDate(),
				duration: parseInt(duration),
				authors: authors.map((i) => i.id),
			},
		]);
		setIsListing(true);
	};
	const addCourse = () => setIsListing(false);

	const updateAuthorList = (author) => {
		setauthorList([...authorList, author]);
	};
	return (
		<div>
			<Header />
			{isListing ? (
				<Courses
					courseList={courses}
					authorList={authorList}
					handlerSearchBar={handlerSearchBar}
					addCourse={addCourse}
				/>
			) : (
				<CreateCourse
					createCourse={createCourse}
					updateAuthorList={updateAuthorList}
					authorList={authorList}
				/>
			)}
		</div>
	);
}

export default App;
