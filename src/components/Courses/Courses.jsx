import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';

import { BUTTON_CARD_TEXT, BUTTON_NEW_TEXT } from '../../constants';

import './courses.css';

const Courses = ({ courseList, authorList, handlerSearchBar, addCourse }) => {
	return (
		<section>
			<div className='courses search'>
				<SearchBar handlerButtonClick={handlerSearchBar} />
				<Button text={BUTTON_NEW_TEXT} onClick={addCourse} />
			</div>
			<div className='courses content'>
				{courseList.map((course) => {
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
