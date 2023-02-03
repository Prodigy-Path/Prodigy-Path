/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../Profile';

import store from '../store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

class ResizeObserver {
  observe() {
      // do nothing
  }
  unobserve() {
      // do nothing
  }
  disconnect() {
      // do nothing
  }
}

window.ResizeObserver = ResizeObserver;

describe('Profile', () => {
  it('renders Profile without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>
    );
  });
});
