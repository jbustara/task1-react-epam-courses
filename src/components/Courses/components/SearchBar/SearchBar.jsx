import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import {
	BUTTON_SEARCH_TEXT,
	INPUT_PLACEHOLDER_SEARCHBAR,
} from '../../../../constants';

import './searchBar.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCourses } from '../../../../store/courses/courseSlice';

const SearchBar = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	useEffect(() => {
		if (!query) {
			//In case user clean search input
			dispatch(filterCourses(''));
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
				onClick={() => dispatch(filterCourses(query))}
			/>
		</div>
	);
};
export default SearchBar;
