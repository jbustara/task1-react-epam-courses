import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';

import { BUTTON_CARD_TEXT, BUTTON_NEW_TEXT } from '../../constants';

import './courses.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCoursesStore, getUserStore } from '../../helpers/selectors';

const Courses = () => {
	const navigate = useNavigate();

	const { role } = useSelector(getUserStore);
	const { filteredCourses } = useSelector(getCoursesStore);
	return (
		<section>
			<div className='courses search'>
				<SearchBar />
				{role === 'admin' && (
					<Button
						text={BUTTON_NEW_TEXT}
						type='button'
						onClick={() => navigate('/courses/add')}
					/>
				)}
			</div>
			<div className='courses content'>
				{filteredCourses.map((course) => {
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
