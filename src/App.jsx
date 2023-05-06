import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import ErrorComp from './common/ErrorComp/ErrorComp';
import { ProtectedRoute } from './common/PrivateRoute/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { getActualUser, getAuthors, getCourses } from './services';
import { PrivateRoute } from './common/PrivateRoute/PrivateRoute';
import { CREATE_COURSE_TEXT, UPDATE_COURSE_TEXT } from './constants';

function App() {
	const dispatch = useDispatch();
	const [token, setToken] = useState(localStorage.getItem('token'));
	useEffect(() => {
		//get user.  If token is expired (time living: 1 day), remove token from local Storage.
		if (token) dispatch(getActualUser(token));
		setToken(localStorage.getItem('token'));

		dispatch(getCourses());
		dispatch(getAuthors());
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route
						path='/'
						element={
							token ? <Navigate to='/courses' /> : <Navigate to='/login' />
						}
					/>
					<Route path='registration' element={<Registration />} />
					<Route path='login' element={<Login />} />
					<Route
						path='courses'
						element={
							<ProtectedRoute>
								<Courses />
							</ProtectedRoute>
						}
					/>
					<Route
						path='courses/:courseId'
						element={
							<ProtectedRoute>
								<CourseInfo />
							</ProtectedRoute>
						}
					/>
					<Route
						path='courses/update/:courseId'
						element={
							<PrivateRoute>
								<CourseForm type={UPDATE_COURSE_TEXT} />
							</PrivateRoute>
						}
					/>
					<Route
						path='courses/add'
						element={
							<PrivateRoute>
								<CourseForm type={CREATE_COURSE_TEXT} />
							</PrivateRoute>
						}
					/>
					<Route path='*' element={<ErrorComp />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
