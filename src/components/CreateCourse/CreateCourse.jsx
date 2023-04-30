import { useState } from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Author from './components/Author';

import {
	BUTTON_FORM_ADD_AUTHOR_TEXT,
	BUTTON_FORM_COURSE_TEXT,
	BUTTON_FORM_DELETE_AUTHOR_TEXT,
	EMPTY_AUTHOR_LIST,
	INPUT_PLACEHOLDER_AUTHOR_FORM,
	INPUT_PLACEHOLDER_DURATION_FORM,
	INPUT_PLACEHOLDER_TEXTAREA_FORM,
	INPUT_PLACEHOLDER_TITLE_FORM,
	mockedAuthorsList,
} from '../../constants';

const CreateCourse = () => {
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [authorsCourse, setAuthorsCourse] = useState([]);
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
	return (
		<form>
			<div>
				<Input
					fname='Title'
					type='text'
					labelText='Title'
					placeholder={INPUT_PLACEHOLDER_TITLE_FORM}
				></Input>
				<Button text={BUTTON_FORM_COURSE_TEXT} />
			</div>
			<div>
				<Input
					type='textArea'
					fname='Description'
					labelText='Description'
					placeholder={INPUT_PLACEHOLDER_TEXTAREA_FORM}
				></Input>
			</div>
			<div>
				<div>
					<h3>Add author</h3>
					<Input
						type='text'
						fname='authorName'
						labelText='Author name'
						placeholder={INPUT_PLACEHOLDER_AUTHOR_FORM}
					></Input>
					<Button text={BUTTON_FORM_ADD_AUTHOR_TEXT} />
					<h3>Duration</h3>
					<Input
						type='number'
						fname='Duration'
						labelText='Duration'
						placeholder={INPUT_PLACEHOLDER_DURATION_FORM}
					></Input>
					<p>Duration: hours</p>
				</div>
				<div>
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
