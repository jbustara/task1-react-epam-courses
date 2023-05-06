import './input.css';
const Input = ({
	labelText,
	minLength,
	fname,
	placeholder,
	handlerInput,
	type,
	min,
	value,
}) => {
	return (
		<div className='inputBox'>
			<label htmlFor={fname}>{labelText}</label>
			<input
				type={type}
				minLength={minLength}
				id={fname}
				min={min}
				defaultValue={value}
				placeholder={placeholder}
				onChange={(e) => handlerInput(e.target.value)}
			></input>
		</div>
	);
};
export default Input;
