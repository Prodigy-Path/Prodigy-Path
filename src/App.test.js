/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
describe('App', () => {
  it('renders header and main components', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const header = screen.getByTestId('heading');
    const main = screen.getByTestId('subheading');
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
