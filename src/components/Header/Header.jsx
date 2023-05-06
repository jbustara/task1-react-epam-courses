import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

import './header.css';

import { BUTTON_HEADER_TEXT } from '../../constants';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserStore } from '../../helpers/selectors';
import { serverLogout } from '../../services';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isAuth, name } = useSelector(getUserStore);

	return (
		<div>
			<div className='header'>
				<Logo />
				{isAuth && (
					<div>
						<span id='login'>{name}</span>
						<Button
							text={BUTTON_HEADER_TEXT}
							type='button'
							onClick={() => {
								dispatch(serverLogout());
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
