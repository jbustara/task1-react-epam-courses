import './input.css';
const Input = ({ fname, placeholder, inputHandler }) => {
	return (
		<div>
			<label for={fname}></label>
			<input
				type='text'
				name={fname}
				placeholder={placeholder}
				onChange={inputHandler}
			/>
		</div>
	);
};
export default Input;
