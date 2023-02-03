/** @format */
/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

import store from '../store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
describe('Tasks', () => {
  it('renders Header without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        ,
      </Provider>,
    );
  });
});
