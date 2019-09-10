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
import Main from './Containers/Main';

@inject('store')
@observer
class App extends React.Component {
  render() {
    return (
      <Provider store={DefaultStore}>
        <Main />
      </Provider>
    );
  }
}

export default App;
