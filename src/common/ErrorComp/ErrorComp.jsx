import { Link } from 'react-router-dom';

const ErrorComp = () => {
	return (
		<div>
			<h3>Route not found</h3>
			<Link to={'/login'}>Go to Login {'>>'}</Link>;
		</div>
	);
};
export default ErrorComp;
