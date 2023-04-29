import Button from '../../../../common/Button/Button';

import { mockedAuthorsList } from '../../../../constants';

import './courseCard.css';

const CourseCard = ({
	title,
	duration,
	creationDate,
	description,
	textButton,
	authors,
}) => {
	return (
		<div className='courseCard'>
			<div className='description'>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className='data'>
				<p id='authors'>
					<strong>Authors: </strong>
					<span>
						{authors
							.map((authorId) => {
								return mockedAuthorsList.find(
									(element) => element.id === authorId
								)?.name;
							})
							.toString()}
					</span>
				</p>
				<p>
					<strong>Duration: </strong>
					{duration}
				</p>
				<p>
					<strong>Created: </strong>
					{creationDate}
				</p>
				<div id='button'>
					<Button text={textButton} />
				</div>
			</div>
		</div>
	);
};
export default CourseCard;
