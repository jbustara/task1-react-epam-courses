import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';
import Logo from '../components/Logo/Logo';
import Button from '../../../common/Button/Button';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mockedStoreUser } from '../../../mocks/data-test.mock';

test('Header should have logo and username', () => {
	// Rendering Header
	const { container } = render(
		<Provider store={mockedStoreUser}>
			<MemoryRouter initialEntries={['/']}>
				<Header />
			</MemoryRouter>
		</Provider>
	);

	// Header contains Logo and Button Components
	const logoComponent = container.querySelector('.logo');
	const buttonComponent = container.querySelector('.btn');
	const username = container.querySelector('span');

	expect(logoComponent).toBeInTheDocument();
	expect(buttonComponent).toBeInTheDocument();
	expect(username.textContent).toEqual('Test Name');

	expect(logoComponent).toEqual(expect.anything(Logo));
	expect(buttonComponent).toEqual(expect.anything(Button));
});
