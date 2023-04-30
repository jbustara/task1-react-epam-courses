import Button from '../../../common/Button/Button';
const Author = ({ author, textButton, handlerClick }) => {
	return (
		<div>
			{author}
			<Button text={textButton} onClick={handlerClick} />
		</div>
	);
};
export default Author;
