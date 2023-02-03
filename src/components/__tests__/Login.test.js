/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import Login from '../signupLogin/Login';

import store from '../store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
describe('Tasks', () => {
  it('renders MentorTasks without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
        ,
      </Provider>,
    );
  });
});
