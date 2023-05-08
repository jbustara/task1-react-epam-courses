import { useEffect, useState } from 'react';

import './courseForm.css';

import { pipeDuration } from '../../helpers/pipeDuration';
import { validateForm } from '../../helpers/validateForm';
import { getAllCourses, getFilteredAuthors } from '../../helpers/selectors';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Author from './components/Author';

import {
	BUTTON_FORM_ADD_AUTHOR_TEXT,
	CREATE_COURSE_TEXT,
	BUTTON_FORM_CREATE_AUTHOR_TEXT,
	BUTTON_FORM_DELETE_AUTHOR_TEXT,
	EMPTY_AUTHOR_LIST,
	INPUT_PLACEHOLDER_AUTHOR_FORM,
	INPUT_PLACEHOLDER_DURATION_FORM,
	INPUT_PLACEHOLDER_TEXTAREA_FORM,
	INPUT_PLACEHOLDER_TITLE_FORM,
	UPDATE_COURSE_TEXT,
} from '../../constants';

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	createAuthor,
	createCourse,
	getAuthors,
	updateCourse,
} from '../../services';
import { updateFilteredAuthors } from '../../store/authors/authorSlice';

const CourseForm = ({ type }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = localStorage.getItem('token');
	//For update
	const { courseId } = useParams();
	const courseInitial = useSelector(getAllCourses).find(
		(item) => item.id === courseId
	);

	const [courseNew, setCourseNew] = useState({
		title: courseInitial?.title ?? '',
		duration: courseInitial?.duration ?? '',
		description: courseInitial?.description ?? '',
		authors: courseInitial?.authors ?? [],
	});
	//Author: list of authors to choose.
	const authors = useSelector(getFilteredAuthors);

	useEffect(() => {
		if (type === UPDATE_COURSE_TEXT)
			dispatch(
				updateFilteredAuthors(
					authors.filter((aut) => !courseInitial?.authors.includes(aut.id))
				)
			);
	}, []);

	const [authorsCourse, setAuthorsCourse] = useState(
		courseInitial?.authors
			? authors.filter((aut) => courseInitial?.authors.includes(aut.id))
			: []
	);

	const [authorName, setAuthorName] = useState('');

	const addAuthor = (id) => {
		const authorSelected = authors.find((author) => author.id === id);
		setAuthorsCourse([...authorsCourse, authorSelected]);
		dispatch(updateFilteredAuthors(authors.filter((item) => item.id !== id)));
	};
	const deleteAuthor = (id) => {
		const authorSelected = authorsCourse.find((author) => author.id === id);
		dispatch(updateFilteredAuthors([...authors, authorSelected]));
		setAuthorsCourse(authorsCourse.filter((item) => item.id !== id));
	};
	const handleCreateAuthor = () => {
		if (authorName === '') return alert('Name empty');
		dispatch(createAuthor({ authorName, token }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { title, duration, description } = courseNew;
		if (!validateForm(title, duration, description, authorsCourse)) return;

		courseNew.duration = parseInt(duration);
		courseNew.authors = authorsCourse.map((i) => i.id);

		if (type === UPDATE_COURSE_TEXT) {
			dispatch(updateCourse({ courseNew, token, courseId }));
		} else {
			dispatch(createCourse({ courseNew, token }));
		}
		//reset filtered courses
		dispatch(getAuthors());

		navigate('/courses');
	};

	return (
		<form className='formCourse' onSubmit={handleSubmit}>
			<div className='titleForm'>
				<Input
					fname='Title'
					value={courseInitial?.title}
					type='text'
					minLength='1'
					labelText='Title'
					placeholder={INPUT_PLACEHOLDER_TITLE_FORM}
					handlerInput={(input) => setCourseNew({ ...courseNew, title: input })}
				></Input>
				<Button
					text={
						type === CREATE_COURSE_TEXT
							? CREATE_COURSE_TEXT
							: UPDATE_COURSE_TEXT
					}
					type='submit'
				/>
			</div>
			<div className='descriptionForm'>
				<label htmlFor='descriptionCourse'>Description</label>
				<textarea
					id='descriptionCourse'
					defaultValue={courseInitial?.description}
					placeholder={INPUT_PLACEHOLDER_TEXTAREA_FORM}
					onChange={(e) =>
						setCourseNew({ ...courseNew, description: e.target.value })
					}
				></textarea>
			</div>
			<div className='authorSection'>
				<div className='col1'>
					<h3>Add author</h3>
					<Input
						type='text'
						fname='authorName'
						minLength='2'
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
						value={courseInitial?.duration}
						min='1'
						labelText='Duration'
						placeholder={INPUT_PLACEHOLDER_DURATION_FORM}
						handlerInput={(input) =>
							setCourseNew({ ...courseNew, duration: input })
						}
					></Input>
					<p>
						Duration:{' '}
						<span id='formattedDate'>{pipeDuration(courseNew.duration)}</span>{' '}
						hours
					</p>
				</div>
				<div className='col2'>
					<h3>Authors</h3>
					{authors
						.filter((author) => !authorsCourse.includes(author.id))
						.map((author) => {
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
export default CourseForm;
