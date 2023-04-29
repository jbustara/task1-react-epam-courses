import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';

import {
	BUTTON_CARD_TEXT,
	BUTTON_NEW_TEXT,
	mockedCoursesList,
} from '../../constants';

import './courses.css';

const Courses = () => {
	const handler = () => {
		alert('click');
	};
	return (
		<section>
			<div className='courses search'>
				<SearchBar onClick={handler} />
				<Button text={BUTTON_NEW_TEXT} />
			</div>
			<div className='courses content'>
				{mockedCoursesList.map((course) => {
					return (
						<CourseCard
							key={course.id}
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
