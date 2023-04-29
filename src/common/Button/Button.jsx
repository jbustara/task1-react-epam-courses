import './button.css';
const Button = ({ text, onClick }) => (
	<button id='btn' onClick={onClick}>
		{text}
	</button>
);
export default Button;
