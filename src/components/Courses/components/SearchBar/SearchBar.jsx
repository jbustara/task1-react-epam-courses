import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { BUTTON_SEARCH_TEXT, INPUT_PLACEHOLDER } from '../../../../constants';

import './searchBar.css';
import { useState } from 'react';

const SearchBar = ({ handlerButtonClick }) => {
	const [query, setQuery] = useState('');
	const handlerInput = (data) => {
		setQuery(data);
	};
	return (
		<div className='searchBar'>
			<Input
				placeholder={INPUT_PLACEHOLDER}
				fname='courseName'
				handlerInput={handlerInput}
			/>
			<Button
				text={BUTTON_SEARCH_TEXT}
				onClick={() => handlerButtonClick(query)}
			/>
		</div>
	);
};
export default SearchBar;
