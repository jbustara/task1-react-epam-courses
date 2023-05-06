import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
	const { role } = useSelector((state) => state.user);
	if (role !== 'admin') {
		return <Navigate to='/courses' />;
	}
	return children;
};
