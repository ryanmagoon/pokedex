import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  List: ListScreen
})

export default HomeStack
