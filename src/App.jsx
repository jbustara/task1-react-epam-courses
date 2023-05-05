import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import ErrorComp from './common/ErrorComp/ErrorComp';
import { ProtectedRoute } from './common/ProtectedRoute/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { getAuthors, getCourses } from './services';

function App() {
	const dispatch = useDispatch();
	const token = localStorage.getItem('token');
	useEffect(() => {
		dispatch(getCourses());
		dispatch(getAuthors());
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Header token={token} />}>
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
						path='courses/add'
						element={
							<ProtectedRoute>
								<CreateCourse />
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
