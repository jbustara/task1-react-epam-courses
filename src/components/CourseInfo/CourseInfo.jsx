import { Link, useParams } from 'react-router-dom';

import './courseInfo.css';
import { pipeDuration } from '../../helpers/pipeDuration';

const CourseInfo = ({ courseList, authorList }) => {
	const { courseId } = useParams();
	const { title, description, creationDate, duration, authors } =
		courseList.find((item) => item.id === courseId);
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
