import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import AppReducer from './reducers'
import AppNavigator from './navigators/AppNavigator';

export default class App extends React.Component {
  store = createStore(AppReducer, {}, applyMiddleware(
    promiseMiddleware()
  ));

  render(){
    return(
      <Provder store={this.store}>
        <AppNavigator />
      </Provider>
    );
  }
}