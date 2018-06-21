import React, { Component } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet } from 'react-native'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Card, CardItem, Text, Body, View } from 'native-base'

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
    header: null
  }

  render = () => (
    <Query query={getPokemons}>
      {({ loading, error, data: { pokemons } }) => {
        if (loading)
          return (
            <View
              style={{
                backgroundColor: '#dc0b2d',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={styles.text}>Loading...</Text>
            </View>
          )
        if (error) return `Error! ${error.message}`

        return (
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center'
            }}
            style={{
              backgroundColor: '#dc0b2d',
              flex: 1
            }}
          >
            {pokemons.map(({ name, number, image, id }, i) => (
              <Card key={i} style={{ width: '90%' }}>
                <CardItem
                  header
                  button
                  onPress={() => {
                    console.log('name', 'pressed')
                    this.props.navigation.navigate('Details', { id })
                  }}
                >
                  <Text style={styles.text}>{number}</Text>
                </CardItem>
                <CardItem
                  button
                  onPress={() => {
                    console.log('name', 'pressed')
                    this.props.navigation.navigate('Details', { id })
                  }}
                >
                  <Body>
                    <Image
                      source={{ uri: image }}
                      style={{
                        resizeMode: 'contain',
                        height: 0.55 * screenWidth,
                        width: '95%'
                      }}
                    />
                  </Body>
                </CardItem>
                <CardItem
                  footer
                  button
                  onPress={() => {
                    console.log('name', 'pressed')
                    this.props.navigation.navigate('Details', { id })
                  }}
                >
                  <Text style={styles.text}>{name}</Text>
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
  },
  text: {
    fontFamily: 'pokemon'
  }
})
