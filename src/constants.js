export const BUTTON_SEARCH_TEXT = 'Search';
export const BUTTON_CARD_TEXT = 'Show course';
export const BUTTON_NEW_TEXT = 'Add new course';
export const BUTTON_HEADER_TEXT = 'Logout';
export const CREATE_COURSE_TEXT = 'Create course';
export const UPDATE_COURSE_TEXT = 'Update course';
export const BUTTON_FORM_ADD_AUTHOR_TEXT = 'Add author';
export const BUTTON_FORM_CREATE_AUTHOR_TEXT = 'Create author';
export const BUTTON_FORM_DELETE_AUTHOR_TEXT = 'Delete author';
export const BUTTON_REGISTER_TEXT = 'Registration';
export const BUTTON_LOGIN_TEXT = 'Login';

export const INPUT_PLACEHOLDER_SEARCHBAR = 'Enter course name';
export const INPUT_PLACEHOLDER_TITLE_FORM = 'Enter title...';
export const INPUT_PLACEHOLDER_AUTHOR_FORM = 'Enter author name...';
export const INPUT_PLACEHOLDER_DURATION_FORM = 'Enter duration in minutes';
export const INPUT_PLACEHOLDER_TEXTAREA_FORM = 'Enter description';
export const INPUT_PLACEHOLDER_REGISTER_NAME = 'Enter name';
export const INPUT_PLACEHOLDER_REGISTER_EMAIL = 'Enter email';
export const INPUT_PLACEHOLDER_REGISTER_PASSWORD = 'Enter password';

export const URL_REGISTRATION = 'http://localhost:4000/register';
export const URL_LOGIN = 'http://localhost:4000/login';
export const URL_LOGOUT = 'http://localhost:4000/logout';
export const URL_GET_USER = 'http://localhost:4000/users/me';
export const URL_GET_COURSES = 'http://localhost:4000/courses/all';
export const URL_COURSES = 'http://localhost:4000/courses/';
export const URL_POST_COURSES = 'http://localhost:4000/courses/add';
export const URL_GET_AUTHORS = 'http://localhost:4000/authors/all';
export const URL_POST_AUTHORS = 'http://localhost:4000/authors/add';

export const EMPTY_AUTHOR_LIST = 'Author list is empty';

export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the
                        1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived
                        not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];
