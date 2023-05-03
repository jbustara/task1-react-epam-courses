import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';

import { BUTTON_CARD_TEXT, BUTTON_NEW_TEXT } from '../../constants';

import './courses.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Courses = ({ courses, authorList }) => {
	const navigate = useNavigate();
	const [coursesFiltered, setCourseFiltered] = useState([...courses]);

	const handlerSearchBar = (data) => {
		setCourseFiltered(
			courses.filter(
				(course) =>
					course.title.toLowerCase().includes(data.toLowerCase()) ||
					course.id.toLowerCase().includes(data.toLowerCase())
			)
		);
	};
	return (
		<section>
			<div className='courses search'>
				<SearchBar handlerSearchBar={handlerSearchBar} />
				<Button
					text={BUTTON_NEW_TEXT}
					type='button'
					onClick={() => navigate('/courses/add')}
				/>
			</div>
			<div className='courses content'>
				{coursesFiltered.map((course) => {
					return (
						<CourseCard
							key={course.id}
							authorList={authorList}
							{...course}
							textButton={BUTTON_CARD_TEXT}
						/>
					);
				})}
			</div>
		</section>
	);
};
export default Courses;
