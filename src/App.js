/** @format */

import Footer from './components/Footer';
import AppShellMain from './components/Header';
import Header from './components/Header';
import Main from './components/Main';
import store from './components/store';
import { Provider } from 'react-redux';
import { AppShell } from '@mantine/core';
import Login from './components/signupLogin/Login';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppShell>
          <Main />
        </AppShell>
      </Provider>
    </>
  );
};
export default App;
