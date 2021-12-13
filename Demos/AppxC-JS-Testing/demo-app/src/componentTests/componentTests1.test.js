import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("simple component unit test", () => {

	test('renders App component without crashing', () => {
		render(<App />);
	});

});


