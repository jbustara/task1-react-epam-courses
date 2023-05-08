export const mockCourses = [
	{
		id: 'test-id-course-1',
		title: 'Test Title 1',
		description: 'Test Description',
		creationDate: '8/3/2021',
		duration: 160,
		authors: ['test-id-author-1', 'test-id-author-2'],
	},
	{
		id: 'test-id-course-2',
		title: 'Test Title 1',
		description: 'Test Description 2',
		creationDate: '8/3/2021',
		duration: 60,
		authors: ['test-id-author-1'],
	},
];
export const mockAuthors = [
	{
		id: 'test-id-author-1',
		name: 'Test Author 1',
	},
	{
		id: 'test-id-author-2',
		name: 'Test Author 2',
	},
	{
		id: 'test-id-author-3',
		name: 'Test Author 3',
	},
];

export const mockUser = {
	isAuth: true,
	name: 'Test Name',
	role: 'user',
	token: 'TestTokenUser',
};

export const mockAdmin = {
	isAuth: true,
	name: 'Test Amin',
	role: 'admin',
	token: 'TestTokenAdmin',
};
//normal user
export const mockedStateUser = {
	user: mockUser,
	courses: {
		allCourses: mockCourses,
		filteredCourses: mockCourses,
	},
	authors: {
		list: mockAuthors,
		listFiltered: mockAuthors,
	},
};
//for mocking not courses
export const mockedStateNotCourses = {
	user: mockUser,
	courses: {
		allCourses: [],
		filteredCourses: [],
	},
	authors: {},
};
//Mock admin user
export const mockedStateAdmin = {
	user: mockAdmin,
	courses: {
		allCourses: mockCourses,
		filteredCourses: mockCourses,
	},
	authors: {
		list: mockAuthors,
		listFiltered: mockAuthors,
	},
};

export const mockedStoreUser = {
	getState: () => mockedStateUser,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
export const mockedStoreWithoutCourses = {
	getState: () => mockedStateNotCourses,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
export const mockedStoreAdmin = {
	getState: () => mockedStateAdmin,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

export const mockCourseNew = {
	title: 'Title Posted',
	description: 'Description Posted',
	duration: 10,
	authors: ['id-author'],
};
