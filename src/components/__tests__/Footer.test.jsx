/** @format */

import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Footer from '../Footer';
import '@testing-library/jest-dom';
import { BrowserRouter, Link } from 'react-router-dom';
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

  it('renders correctly when logged in', () => {
    const store = mockStore({
      login: {
        isLoggedIn: true,
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
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });

  test('scrolls to the top of the page when clicking the link to /devs', () => {
    const store = mockStore({
      login: {
        isLoggedIn: true,
      },
    });
    jest.spyOn(window, 'scrollTo');

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            to="/devs"
          >
            Meet the Devs
          </Link>
          ,
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByText('Meet the Devs'));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
