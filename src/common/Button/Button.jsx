import './button.css';
const Button = ({ text, onClick, type }) => (
	<button type={type} id='btn' onClick={onClick}>
		{text}
	</button>
);
export default Button;
