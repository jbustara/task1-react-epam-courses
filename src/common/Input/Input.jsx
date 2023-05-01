import './input.css';
const Input = ({
	labelText,
	minLenght,
	fname,
	placeholder,
	handlerInput,
	type,
	min,
}) => {
	return (
		<div className='inputBox'>
			<label htmlFor={fname}>{labelText}</label>
			<input
				type={type}
				minLength={minLenght}
				id={fname}
				min={min}
				placeholder={placeholder}
				onChange={(e) => handlerInput(e.target.value)}
			/>
		</div>
	);
};
export default Input;
