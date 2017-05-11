import React from 'react';
import { StackNavigator } from 'react-navigation';

import AppNavigator from './navigators/AppNavigator';

export default class App extends React.Component {
  render(){
    return(
      <AppNavigator />
    );
  }
}