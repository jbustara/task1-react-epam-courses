import { Link, Navigate, useParams } from 'react-router-dom';

import './courseInfo.css';
import { pipeDuration } from '../../helpers/pipeDuration';
import { useSelector } from 'react-redux';
import { getAllAuthors, getAllCourses } from '../../helpers/selectors';

const CourseInfo = () => {
	const { courseId } = useParams();
	const courses = useSelector(getAllCourses);
	const authorList = useSelector(getAllAuthors);
	const { title, description, creationDate, duration, authors } = courses.find(
		(item) => item.id === courseId
	);
	console.log('title :>> ', title);
	if (!title) return <Navigate to='courses' />;
	const authorsName = authorList.filter((item) => authors.includes(item.id));
	return (
		<section className='detailCourse'>
			<div>
				<Link to='/courses'>{'<'} Back to courses</Link>
			</div>
			<div className='detailTitle'>
				<h2>{title}</h2>
			</div>
			<div className='detailBody'>
				<div className='detailDescription'>{description}</div>
				<div className='detailOthers'>
					<p>
						<strong>ID: </strong>
						{courseId}
					</p>
					<p>
						<strong>Duration: </strong>
						{<span>{pipeDuration(duration)} hours</span>}
					</p>
					<p>
						<strong>Created: </strong>
						{creationDate}
					</p>
					<p>
						<strong>Authors: </strong>
						{authorsName.map((item) => {
							return <p key={item.id}>{item.name}</p>;
						})}
					</p>
				</div>
			</div>
		</section>
	);
};
export default CourseInfo;
