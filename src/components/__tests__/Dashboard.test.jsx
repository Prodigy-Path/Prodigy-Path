/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';
import MentorDashboard from '../Dashboard/MentorDashboard';
import ProtegeDashboard from '../Dashboard/ProtegeDashboard';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
describe('Tasks', () => {
  it('renders Dashboard without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
        ,
      </Provider>,
    );
  });

  it('renders mentorDashboard without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MentorDashboard />
        </BrowserRouter>
        ,
      </Provider>,
    );
  });

    it('renders ProtegeDashboard without crashing', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProtegeDashboard />
          </BrowserRouter>
          ,
        </Provider>,
      );
    });
});
