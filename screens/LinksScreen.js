import React, { Component, Fragment } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet } from 'react-native'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Card, CardItem, Text, Body } from 'native-base'

const screenWidth = Dimensions.get('window').width

const getPokemons = gql`
  {
    pokemons(first: 151) {
      name
      number
      id
      image
    }
  }
`

const cardStyle = { margin: 15, height: 320, width: 280 }

export default class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Links'
  }

  render = () => (
    <Query query={getPokemons}>
      {({ loading, error, data: { pokemons } }) => {
        if (loading) return <Text>Loading...</Text>
        if (error) return `Error! ${error.message}`

        return (
          <ScrollView style={{ flex: 1 }}>
            {pokemons.map(({ name, number, image }, i) => (
              <Card key={i}>
                <CardItem header>
                  <Text>{number}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image
                      source={{ uri: image }}
                      style={{
                        resizeMode: 'contain',
                        height: 0.55 * screenWidth,
                        width: 0.95 * screenWidth
                      }}
                    />
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>{name}</Text>
                </CardItem>
              </Card>
            ))}
          </ScrollView>
        )
      }}
    </Query>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dc0b2d'
  }
})
