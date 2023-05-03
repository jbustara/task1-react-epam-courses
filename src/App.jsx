import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import ErrorComp from './common/ErrorComp/ErrorComp';
import { ProtectedRoute } from './common/ProtectedRoute/ProtectedRoute';

function App() {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authorList, setAuthorList] = useState(mockedAuthorsList);
	const token = localStorage.getItem('token');
	const [user, setUser] = useState('');
	console.log('user :>> ', user);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Header user={user} setUser={setUser} />}>
					<Route path='registration' element={<Registration />} />
					<Route path='login' element={<Login setUser={setUser} />} />
					<Route
						path='courses'
						element={
							<ProtectedRoute token={token}>
								<Courses courses={courses} authorList={authorList} />
							</ProtectedRoute>
						}
					/>
					<Route
						path='courses/:courseId'
						element={
							<ProtectedRoute token={token}>
								<CourseInfo authorList={authorList} courseList={courses} />
							</ProtectedRoute>
						}
					/>
					<Route
						path='courses/add'
						element={
							<ProtectedRoute token={token}>
								<CreateCourse
									setCourses={setCourses}
									setAuthorList={setAuthorList}
									authorList={authorList}
									coursesList={courses}
								/>
							</ProtectedRoute>
						}
					/>
					<Route path='*' element={<ErrorComp />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
