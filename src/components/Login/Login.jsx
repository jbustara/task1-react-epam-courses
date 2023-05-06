import { useState } from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './login.css';

import {
	BUTTON_LOGIN_TEXT,
	INPUT_PLACEHOLDER_REGISTER_EMAIL,
	INPUT_PLACEHOLDER_REGISTER_PASSWORD,
	URL_LOGIN,
} from '../../constants';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getActualUser } from '../../services';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email || !password) return alert('Fill in all fields');
		try {
			const response = await fetch(URL_LOGIN, {
				method: 'POST',
				body: JSON.stringify({
					email,
					password,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (!response.ok) {
				alert(`Error! status: ${response.status}`);
				return;
			}
			const result = await response.json();
			localStorage.setItem('token', result.result);
			dispatch(getActualUser(result.result));
			navigate('/courses');
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div className='login'>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<Input
					fname='Email'
					placeholder={INPUT_PLACEHOLDER_REGISTER_EMAIL}
					labelText='Email'
					type='email'
					handlerInput={setEmail}
				/>
				<Input
					fname='Password'
					placeholder={INPUT_PLACEHOLDER_REGISTER_PASSWORD}
					labelText='Password'
					type='password'
					handlerInput={setPassword}
				/>
				<Button text={BUTTON_LOGIN_TEXT} type='submit' />
			</form>
			<p>
				If you not have an account you can{' '}
				<Link to='/registration'>Registration</Link>
			</p>
		</div>
	);
};
export default Login;
