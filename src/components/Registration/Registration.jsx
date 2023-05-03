import { useState } from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './registration.css';

import {
	BUTTON_REGISTER_TEXT,
	INPUT_PLACEHOLDER_REGISTER_EMAIL,
	INPUT_PLACEHOLDER_REGISTER_NAME,
	INPUT_PLACEHOLDER_REGISTER_PASSWORD,
	URL_REGISTRATION,
} from '../../constants';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name || !email || !password) return alert('Fill in all fields');
		try {
			const response = await fetch(URL_REGISTRATION, {
				method: 'POST',
				body: JSON.stringify({
					name,
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
			if (result.successful) {
				alert(`${name} ha sido registrado`);
				navigate('/login');
			}
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div className='registration'>
			<h2>Registration</h2>
			<form onSubmit={handleSubmit}>
				<Input
					fname='Name'
					placeholder={INPUT_PLACEHOLDER_REGISTER_NAME}
					labelText='Name'
					type='text'
					handlerInput={setName}
				/>
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
				<Button text={BUTTON_REGISTER_TEXT} type='submit' />
			</form>
			<p>
				If you have an account you can <Link to='/login'>Login</Link>
			</p>
		</div>
	);
};
export default Registration;
