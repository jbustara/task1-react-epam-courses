import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

import './header.css';

import { BUTTON_HEADER_TEXT, USERNAME } from '../../constants';

const Header = () => {
	return (
		<section className='header'>
			<Logo />
			<div>
				<span id='login'>{USERNAME}</span>
				<Button text={BUTTON_HEADER_TEXT} />
			</div>
		</section>
	);
};
export default Header;
