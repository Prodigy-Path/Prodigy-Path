/** @format */

import HeaderComponent from '../src/components/Header';
import Main from './components/Main';
import store from './components/store';
import { Provider } from 'react-redux';
import { AppShell } from '@mantine/core';
import { CookiesProvider } from 'react-cookie';
import { useEffect } from 'react';
import analytics from 'analytics-benson';

const App = () => {
  useEffect(() => {
    analytics('Prodigy Path', 'd526e49d-cc0f-468f-b04d-f59e21f6365a');
  }, []);
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
