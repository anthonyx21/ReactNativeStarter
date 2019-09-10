import {createStackNavigator} from 'react-navigation';
import Main from '../Containers/Main';
import Second from '../Containers/Second';

const MainNavigator = createStackNavigator({
  Home: {screen: Main},
  Second: {screen: Second},
});

export default MainNavigator;
