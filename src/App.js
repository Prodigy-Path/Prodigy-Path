/** @format */

import Footer from './src/Footer';
import AppShellMain from './src/Header';
import Header from './src/Header';
import Main from './src/Main';
import store from './src/store';
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
