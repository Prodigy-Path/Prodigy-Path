/** @format */

import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Footer from '../Footer';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
const mockStore = configureStore();

describe('Footer component', () => {
  afterEach(cleanup);

  it('renders correctly when not logged in', () => {
    const store = mockStore({
      login: {
        isLoggedIn: false,
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
      
            <Footer />
      
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('ProdigyPath')).toBeInTheDocument();
    expect(screen.getByText("What's Prodigy Path?")).toBeInTheDocument();
    expect(screen.getByText('Meet the Devs')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Signup')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });
});
