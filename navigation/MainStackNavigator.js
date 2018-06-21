import { createStackNavigator } from 'react-navigation'

import Home from '../screens/HomeScreen'
import List from '../screens/ListScreen'
import Details from '../screens/DetailsScreen'

const HomeStack = createStackNavigator(
  {
    Home,
    List,
    Details
  },
  {
    navigationOptions: {
      header: null
    }
  }
)

export default HomeStack
