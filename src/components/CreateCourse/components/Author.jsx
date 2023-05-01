import Button from '../../../common/Button/Button';

import './author.css';

const Author = ({ author, textButton, handlerClick }) => {
	return (
		<div className='author'>
			<span>{author}</span>
			<Button text={textButton} onClick={handlerClick} />
		</div>
	);
};
export default Author;
