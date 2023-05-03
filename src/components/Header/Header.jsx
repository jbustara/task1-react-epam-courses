import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

import './header.css';

import { BUTTON_HEADER_TEXT } from '../../constants';
import { Outlet, useNavigate } from 'react-router-dom';

const Header = ({ user, setUser }) => {
	const navigate = useNavigate();

	return (
		<div>
			<div className='header'>
				<Logo />
				{user && (
					<div>
						<span id='login'>{user}</span>
						<Button
							text={BUTTON_HEADER_TEXT}
							type='button'
							onClick={() => {
								localStorage.removeItem('token');
								setUser(null);
								navigate('/login');
							}}
						/>
					</div>
				)}
			</div>
			<Outlet />
		</div>
	);
};
export default Header;
