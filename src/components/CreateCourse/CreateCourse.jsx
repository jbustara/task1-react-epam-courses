import { useEffect, useState } from 'react';

import './createCourse.css';

import { v4 as uuidv4 } from 'uuid';
import { pipeDuration } from '../../helpers/pipeDuration';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Author from './components/Author';

import {
	BUTTON_FORM_ADD_AUTHOR_TEXT,
	BUTTON_FORM_COURSE_TEXT,
	BUTTON_FORM_CREATE_AUTHOR_TEXT,
	BUTTON_FORM_DELETE_AUTHOR_TEXT,
	EMPTY_AUTHOR_LIST,
	INPUT_PLACEHOLDER_AUTHOR_FORM,
	INPUT_PLACEHOLDER_DURATION_FORM,
	INPUT_PLACEHOLDER_TEXTAREA_FORM,
	INPUT_PLACEHOLDER_TITLE_FORM,
} from '../../constants';
import { useNavigate } from 'react-router-dom';
import { generateDate } from '../../helpers/dateGenerator';
import { useDispatch, useSelector } from 'react-redux';
import { createAuthor } from '../../store/authors/authorSlice';
import { createCourse } from '../../store/courses/courseSlice';
import { getAllAuthors } from '../../helpers/selectors';

const CreateCourse = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [authors, setAuthors] = useState(useSelector(getAllAuthors));
	const [courseNew, setCourseNew] = useState({
		title: '',
		duration: '',
		description: '',
		authors: [],
	});
	const [authorsCourse, setAuthorsCourse] = useState([]);
	const [authorName, setAuthorName] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');
	useEffect(() => {
		setCourseNew({
			title,
			duration,
			description,
			authorsCourse,
		});
	}, [title, description, duration, authorsCourse]);

	const addAuthor = (id) => {
		const authorSelected = authors.find((author) => author.id === id);
		setAuthorsCourse([...authorsCourse, authorSelected]);
		setAuthors(authors.filter((item) => item.id !== id));
	};
	const deleteAuthor = (id) => {
		const authorSelected = authorsCourse.find((author) => author.id === id);
		setAuthors([...authors, authorSelected]);
		setAuthorsCourse(authorsCourse.filter((item) => item.id !== id));
	};
	const handleCreateAuthor = () => {
		const authorNew = { id: uuidv4(), name: authorName };
		dispatch(createAuthor(authorNew));
		setAuthors([...authors, authorNew]);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { title, description, duration, authorsCourse } = courseNew;
		if (
			title === '' ||
			duration === '' ||
			description === '' ||
			authorsCourse.lenght === 0
		) {
			return alert('Please, fill in all fields');
		}
		if (title.length < 2) return alert('Title must have at least 2 characters');
		if (parseInt(duration) < 1)
			return alert('Duration must last at least 1 minute');
		if (authorsCourse.length === 0) return alert('Choose at least one author');

		dispatch(
			createCourse({
				id: uuidv4(),
				title,
				description,
				creationDate: generateDate(),
				duration: parseInt(duration),
				authors: authorsCourse.map((i) => i.id),
			})
		);
		navigate('/courses');
	};

	return (
		<form className='formCourse' onSubmit={handleSubmit}>
			<div className='titleForm'>
				<Input
					fname='Title'
					type='text'
					minLenght='1'
					labelText='Title'
					placeholder={INPUT_PLACEHOLDER_TITLE_FORM}
					handlerInput={setTitle}
				></Input>
				<Button text={BUTTON_FORM_COURSE_TEXT} type='submit' />
			</div>
			<div className='descriptionForm'>
				<label htmlFor='descriptionCourse'>Description</label>
				<textarea
					id='descriptionCourse'
					placeholder={INPUT_PLACEHOLDER_TEXTAREA_FORM}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</div>
			<div className='authorSection'>
				<div className='col1'>
					<h3>Add author</h3>
					<Input
						type='text'
						fname='authorName'
						minLenght='2'
						labelText='Author name'
						handlerInput={setAuthorName}
						placeholder={INPUT_PLACEHOLDER_AUTHOR_FORM}
					></Input>
					<Button
						text={BUTTON_FORM_CREATE_AUTHOR_TEXT}
						type='button'
						onClick={handleCreateAuthor}
					/>
					<h3>Duration</h3>
					<Input
						type='number'
						fname='Duration'
						min='1'
						labelText='Duration'
						placeholder={INPUT_PLACEHOLDER_DURATION_FORM}
						handlerInput={setDuration}
					></Input>
					<p>
						Duration: <span id='formattedDate'>{pipeDuration(duration)}</span>{' '}
						hours
					</p>
				</div>
				<div className='col2'>
					<h3>Authors</h3>
					{authors.map((author) => {
						return (
							<Author
								key={author.id}
								author={author.name}
								textButton={BUTTON_FORM_ADD_AUTHOR_TEXT}
								handlerClick={() => addAuthor(author.id)}
							/>
						);
					})}
					<h3>Course authors</h3>
					{authorsCourse.length === 0 ? (
						<p>{EMPTY_AUTHOR_LIST}</p>
					) : (
						authorsCourse.map((author) => {
							return (
								<Author
									key={author.id}
									author={author.name}
									textButton={BUTTON_FORM_DELETE_AUTHOR_TEXT}
									handlerClick={() => deleteAuthor(author.id)}
								/>
							);
						})
					)}
				</div>
			</div>
		</form>
	);
};
export default CreateCourse;
