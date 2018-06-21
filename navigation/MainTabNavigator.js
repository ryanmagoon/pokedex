import { createStackNavigator } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react-navigation'

import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  List: ListScreen
})

export default HomeStack
