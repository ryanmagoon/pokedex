import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

export default class TabBarIcon extends React.Component {
  render() {
    return this.props.name === 'pokeball' ? (
      <MaterialCommunityIcons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    ) : (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    )
  }
}
