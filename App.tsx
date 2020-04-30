import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import store from './app/redux/store';
import UserNavigator from './app/routes';


class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <NavigationContainer>
          <UserNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
