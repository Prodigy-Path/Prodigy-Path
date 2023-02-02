/** @format */

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HeaderComponent from '../Header';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useSelector, useDispatch } from 'react-redux';
import { setOpened } from '../store/drawerSlice';
import { logout } from '../store/loginSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockStore = configureStore([]);

xdescribe('HeaderComponent', () => {
  let store;
  let dispatch;

  beforeEach(() => {
    store = mockStore({
      login: { isLoggedIn: true },
      drawer: { opened: false, menuClass: 'hidden' },
    });
    store.dispatch = jest.fn();
    dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <HeaderComponent />
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });

  it('should call setOpened when burger is clicked', () => {
    useSelector.mockImplementation((selector) =>
      selector({
        login: { isLoggedIn: true },
        drawer: { opened: false, menuClass: 'hidden' },
      }),
    );
    render(
      <Provider store={store}>
        <HeaderComponent />
      </Provider>,
    );
    fireEvent.click(screen.getByTestId('burger'));
    expect(dispatch).toHaveBeenCalledWith(setOpened());
  });

  it('should call logout when logout button is clicked', () => {
    useSelector.mockImplementation((selector) =>
      selector({
        login: { isLoggedIn: true },
        drawer: { opened: false, menuClass: 'hidden' },
      }),
    );
    render(
      <Provider store={store}>
        <HeaderComponent />
      </Provider>,
    );
    fireEvent.click(screen.getByTestId('logout'));
    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
