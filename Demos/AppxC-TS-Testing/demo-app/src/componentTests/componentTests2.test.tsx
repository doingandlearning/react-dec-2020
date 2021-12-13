import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe("going further with unit tests", () => {

	let container;
	
	beforeEach( () => {
		let renderResult = render(<App />);
		container = renderResult.container;
	});
	
	test('locates text content in document', () => {
		const linkElement = screen.getByText(/learn react/i);
		expect(linkElement).toBeInTheDocument();
	});

	test('locates element by id in document', () => {
		const paraElement = container.querySelector('#mypara1');
		expect(paraElement).toBeInTheDocument();
	});

	test('locates element by CSS class in document', () => {
		const linkElement = container.querySelector('.App-link');
		expect(linkElement).toBeInTheDocument();
	});

	test('fires an event', () => {
		const buttonElement = container.querySelector('#mybutton1');	
		fireEvent.click(buttonElement);
		
		const linkElement = container.querySelector('.App-link');
		expect(linkElement.innerHTML).toBe('You gotta learn React dude')
	});
});

 
