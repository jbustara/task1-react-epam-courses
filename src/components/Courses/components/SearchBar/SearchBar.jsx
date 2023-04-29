import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { BUTTON_SEARCH_TEXT, INPUT_PLACEHOLDER } from '../../../../constants';

import './searchBar.css';

const SearchBar = ({ onClick }) => {
	return (
		<div className='searchBar'>
			<Input placeholder={INPUT_PLACEHOLDER} fname='courseName' />
			<Button text={BUTTON_SEARCH_TEXT} onClick={onClick} />
		</div>
	);
};
export default SearchBar;
