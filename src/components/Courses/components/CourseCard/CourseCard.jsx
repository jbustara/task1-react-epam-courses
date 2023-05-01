import Button from '../../../../common/Button/Button';

import './courseCard.css';

const CourseCard = ({
	title,
	duration,
	creationDate,
	description,
	textButton,
	authors,
	authorList,
}) => {
	return (
		<div className='courseCard'>
			<div className='description'>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className='data'>
				<p>
					<strong>Authors: </strong>
					<span>
						{authors
							.map((authorId) => {
								return authorList.find((element) => element.id === authorId)
									?.name;
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
				<div className='button'>
					<Button text={textButton} />
				</div>
			</div>
		</div>
	);
};
export default CourseCard;
