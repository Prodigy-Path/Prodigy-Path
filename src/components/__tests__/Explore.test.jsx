/** @format */
/** @format */

import React from 'react';
import { render } from '@testing-library/react';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Explore from '../Explore';
describe('Tasks', () => {
  it('renders Explore without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Explore />
        </BrowserRouter>
        ,
      </Provider>,
    );
  });
});
