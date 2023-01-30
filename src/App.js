/** @format */

import HeaderComponent from '../src/components/Header';
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
          <HeaderComponent />
          <Main />
        </AppShell>
      </Provider>
    </>
  );
};
export default App;
