/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {inject, observer, Provider} from 'mobx-react';
import DefaultStore from './MobX/DefaultStore';
import {createAppContainer} from 'react-navigation';
import MainNavigator from './Navigation/MainNavigator';

const AppContainer = createAppContainer(MainNavigator);

@inject('store')
@observer
class App extends React.Component {
  render() {
    return (
      <Provider store={DefaultStore}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
