import React, { Component, Fragment } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { lighten } from '../node_modules/polished'

const getPokemons = gql`
  {
    pokemons(first: 151) {
      name
      id
    }
  }
`

export default class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Links'
  }

  render = () => (
    <Query query={getPokemons}>
      {({ loading, error, data: { pokemons } }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <Fragment>
            {pokemons.map(({ name, id }) => <Text>{name}</Text>)}
          </Fragment>
        )
      }}
    </Query>
  )

  // render() {
  //   return <ScrollView style={styles.container} />
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dc0b2d'
  }
})
