/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import MentorTasks from '../Task/MentorTasks';
import ProtegeTasks from '../Task/ProtegeTasks';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
describe('Tasks', () => {
  it('renders MentorTasks without crashing', () => {
    render(
        <Provider store={store}>
      <BrowserRouter>
          <MentorTasks />
      </BrowserRouter>,
        </Provider>
    );
  });

  it('renders ProtegeTasks without crashing', () => {
    render(
        <Provider store={store}>
      <BrowserRouter>
          <ProtegeTasks />
      </BrowserRouter>,
        </Provider>
    );
  });
});
