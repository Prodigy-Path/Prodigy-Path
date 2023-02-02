/** @format */

import React from 'react';
import { render, screen } from '@testing-library/react';
import SplashPage from '../SplashPage';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('SplashPage', () => {
  it('should display the header', () => {
    render(
      <BrowserRouter>
        <SplashPage />
      </BrowserRouter>,
    );

    expect(screen.getByText('Prodigy Path')).toBeInTheDocument();
    expect(
      screen.getByText('Empowering the Next Generation of Experts'),
    ).toBeInTheDocument();
  });

  it('should display the login button', () => {
    render(
      <BrowserRouter>
        <SplashPage />
      </BrowserRouter>,
    );

    expect(screen.getByText('LOGIN')).toBeInTheDocument();
  });

  it('should display the cards with the features', () => {
    render(
      <BrowserRouter>
        <SplashPage />
      </BrowserRouter>,
    );

    expect(screen.getByText('Mentor Matching:')).toBeInTheDocument();
    expect(screen.getByText('Real-time Communication:')).toBeInTheDocument();
    expect(screen.getByText('Expert Insights:')).toBeInTheDocument();
    expect(screen.getByText('Easy Connections:')).toBeInTheDocument();
  });
});
