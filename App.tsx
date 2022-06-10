import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Game: {
    screen: GameScreen,
    navigationOptions: {
      headerShown: false
    }
  }
},
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer />
  )
}
