import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';

import {
	BUTTON_CARD_TEXT,
	BUTTON_NEW_TEXT,
	mockedCoursesList,
} from '../../constants';

import './courses.css';
import { useState } from 'react';
import CreateCourse from '../CreateCourse/CreateCourse';

const Courses = () => {
	const [list, setList] = useState(mockedCoursesList);
	const handlerSearchBar = (data) => {
		setList(
			mockedCoursesList.filter(
				(course) =>
					course.title.toLowerCase().includes(data.toLowerCase()) ||
					course.id.toLowerCase().includes(data.toLowerCase())
			)
		);
	};

	return (
		<section>
			<div className='courses search'>
				<SearchBar handlerButtonClick={handlerSearchBar} />
				<Button text={BUTTON_NEW_TEXT} />
			</div>
			<div className='courses content'>
				{list.map((course) => {
					return (
						<CourseCard
							key={course.id}
							{...course}
							textButton={BUTTON_CARD_TEXT}
						/>
					);
				})}
			</div>
			<CreateCourse />
		</section>
	);
};
export default Courses;
