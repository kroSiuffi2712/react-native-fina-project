import * as React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import store from './src/store/index';
import Login from './src/screens/container/Login';

const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
