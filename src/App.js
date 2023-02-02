/** @format */

import HeaderComponent from '../src/components/Header';
import Main from './components/Main';
import store from './components/store';
import { Provider } from 'react-redux';
import { AppShell } from '@mantine/core';
import { CookiesProvider } from 'react-cookie';


const App = () => {
  return (
    <>
      <CookiesProvider>
        <Provider store={store}>
          <AppShell>
            <HeaderComponent />
            <Main />
          </AppShell>
        </Provider>
      </CookiesProvider>
    </>
  );
};
export default App;
