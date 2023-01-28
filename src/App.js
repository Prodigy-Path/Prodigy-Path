/** @format */

import Footer from './components/Footer';
import AppShellMain from './components/Header';
import Header from './components/Header';
import Main from './components/Main';
import store from './components/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppShellMain>
          <Main />
        </AppShellMain>
      </Provider>
    </>
  );
};
export default App;
