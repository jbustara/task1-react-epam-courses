import { useState } from 'react';

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

const CreateCourse = ({ createCourse, updateAuthorList, authorList }) => {
	const [authors, setAuthors] = useState(authorList);
	const [courseNew, setCourseNew] = useState({
		title: '',
		duration: '',
		description: '',
		authors: [],
	});
	const [authorsCourse, setAuthorsCourse] = useState([]);
	const [authorName, setAuthorName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

	const addAuthor = (id) => {
		const authorSelected = authors.find((author) => author.id === id);
		setAuthorsCourse([...authorsCourse, authorSelected]);
		setAuthors(authors.filter((item) => item.id !== id));
		setCourseNew({ ...courseNew, authors: [...authorsCourse, authorSelected] });
	};
	const deleteAuthor = (id) => {
		const authorSelected = authorsCourse.find((author) => author.id === id);
		setAuthors([...authors, authorSelected]);
		setAuthorsCourse(authorsCourse.filter((item) => item.id !== id));
		setCourseNew({
			...courseNew,
			authors: authorsCourse.filter((item) => item.id !== id),
		});
	};
	const handlerInputAuthor = (input) => {
		setAuthorName(input);
	};
	const handlerInputTitle = (input) => {
		setTitle(input);
		setCourseNew({ ...courseNew, title: input });
	};
	const handlerInputDescription = (input) => {
		setDescription(input);
		setCourseNew({ ...courseNew, description: input });
	};
	const handlerInputDuration = (input) => {
		setDuration(input);
		setCourseNew({ ...courseNew, duration: input });
	};
	const createAuthor = () => {
		const authorNew = { id: uuidv4(), name: authorName };
		setAuthors([...authors, authorNew]);
		updateAuthorList(authorNew);
	};

	return (
		<form className='formCourse'>
			<div className='titleForm'>
				<Input
					fname='Title'
					type='text'
					minLenght='1'
					labelText='Title'
					placeholder={INPUT_PLACEHOLDER_TITLE_FORM}
					handlerInput={handlerInputTitle}
				></Input>
				<Button
					text={BUTTON_FORM_COURSE_TEXT}
					onClick={() => createCourse({ ...courseNew })}
				/>
			</div>
			<div className='descriptionForm'>
				<label htmlFor='descriptionCourse'>Description</label>
				<textarea
					id='descriptionCourse'
					placeholder={INPUT_PLACEHOLDER_TEXTAREA_FORM}
					onChange={(e) => handlerInputDescription(e.target.value)}
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
						handlerInput={handlerInputAuthor}
						placeholder={INPUT_PLACEHOLDER_AUTHOR_FORM}
					></Input>
					<Button
						text={BUTTON_FORM_CREATE_AUTHOR_TEXT}
						onClick={createAuthor}
					/>
					<h3>Duration</h3>
					<Input
						type='number'
						fname='Duration'
						min='1'
						labelText='Duration'
						placeholder={INPUT_PLACEHOLDER_DURATION_FORM}
						handlerInput={handlerInputDuration}
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
