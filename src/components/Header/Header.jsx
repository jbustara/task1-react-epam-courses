import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

import './header.css';

import { BUTTON_HEADER_TEXT } from '../../constants';

const Header = () => {
	return (
		<section className='header'>
			<Logo />
			<div>
				<span id='login'>Camilo</span>
				<Button text={BUTTON_HEADER_TEXT} />
			</div>
		</section>
	);
};
export default Header;
