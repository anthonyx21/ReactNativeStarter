import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from '../Containers/Main';

const MainNavigator = createStackNavigator({
  Home: {screen: Main},
});

export default MainNavigator;
