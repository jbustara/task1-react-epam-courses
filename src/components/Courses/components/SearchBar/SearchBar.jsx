import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import {
	BUTTON_SEARCH_TEXT,
	INPUT_PLACEHOLDER_SEARCHBAR,
} from '../../../../constants';

import './searchBar.css';
import { useEffect, useState } from 'react';

const SearchBar = ({ handlerSearchBar }) => {
	const [query, setQuery] = useState('');
	useEffect(() => {
		if (!query) {
			handlerSearchBar(''); //In case user clean search input
		}
	}, [query]);
	return (
		<div className='searchBar'>
			<Input
				placeholder={INPUT_PLACEHOLDER_SEARCHBAR}
				type='text'
				fname='courseName'
				handlerInput={setQuery}
			/>
			<Button
				text={BUTTON_SEARCH_TEXT}
				type='button'
				onClick={() => handlerSearchBar(query)}
			/>
		</div>
	);
};
export default SearchBar;
