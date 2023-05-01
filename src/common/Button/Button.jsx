import './button.css';
const Button = ({ text, onClick, onSubmit }) => (
	<button type='button' id='btn' onClick={onClick} onSubmit={onSubmit}>
		{text}
	</button>
);
export default Button;
