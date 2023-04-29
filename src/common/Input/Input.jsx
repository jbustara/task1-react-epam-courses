import './input.css';
const Input = ({ labelText, fname, placeholder, handlerInput }) => {
	return (
		<div>
			<label htmlFor={fname}>{labelText}</label>
			<input
				type='text'
				id={fname}
				placeholder={placeholder}
				onChange={(e) => handlerInput(e.target.value)}
			/>
		</div>
	);
};
export default Input;
