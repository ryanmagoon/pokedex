import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Image, View } from 'react-native'
import { Body, Card, CardItem, Text } from 'native-base'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const screenWidth = Dimensions.get('window').width

const PokemonDetails = ({ navigation }) => {
  const getPokemonDetails = gql`
    query pokemon($id: String!) {
      pokemon(id: $id) {
        name
        image
        number
        classification
        types
        resistant
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
        weaknesses
        maxHP
        height {
          minimum
          maximum
        }
        weight {
          minimum
          maximum
        }
      }
    }
  `

  return (
    <Query
      query={getPokemonDetails}
      variables={{ id: navigation.getParam('id') }}
    >
      {({ loading, error, data: { pokemon } }) => {
        console.log('pokemon from details', pokemon)
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
            <Card style={{ width: '90%' }}>
              <CardItem style={styles.header}>
                <Text style={styles.headerText}>{pokemon.number}</Text>
              </CardItem>
              <CardItem>
                <Text style={styles.headerText}>{pokemon.name}</Text>
              </CardItem>
              <CardItem>
                <Text style={styles.headerText}>{pokemon.classification}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Image
                    source={{ uri: pokemon.image }}
                    style={{
                      resizeMode: 'contain',
                      height: 0.55 * screenWidth,
                      width: '95%'
                    }}
                  />
                </Body>
              </CardItem>
              <Text style={styles.headerText}>Types</Text>
              <CardItem style={{ flexDirection: 'column' }}>
                {pokemon.types.map((type, i) => (
                  <Text key={i} style={styles.text}>
                    {type}
                  </Text>
                ))}
              </CardItem>
              <Text style={styles.headerText}>Resistances</Text>
              <CardItem style={{ flexDirection: 'column' }}>
                {pokemon.resistant.map((resistance, i) => (
                  <Text key={i} style={styles.text}>
                    {resistance}
                  </Text>
                ))}
              </CardItem>
              <Text style={styles.headerText}>Weaknesses</Text>
              <CardItem style={{ flexDirection: 'column' }}>
                {pokemon.weaknesses.map((weakness, i) => (
                  <Text key={i} style={styles.text}>
                    {weakness}
                  </Text>
                ))}
              </CardItem>
              <Text style={styles.headerText}>Physical Dimensions</Text>
              <CardItem style={{ flexDirection: 'column' }}>
                <Text style={styles.text}>
                  min height: {pokemon.height.minimum}
                </Text>
                <Text style={styles.text}>
                  max height: {pokemon.height.maximum}
                </Text>
              </CardItem>
              <CardItem style={{ flexDirection: 'column' }}>
                <Text style={styles.text}>
                  min weight: {pokemon.weight.minimum}
                </Text>
                <Text style={styles.text}>
                  max weight: {pokemon.weight.maximum}
                </Text>
              </CardItem>
              <Text style={styles.headerText}>Regular Attacks</Text>
              {pokemon.attacks.fast.map(({ name, type, damage }, i) => (
                <CardItem style={{ flexDirection: 'column' }} key={i}>
                  <Text style={styles.text}>{name}</Text>
                  <Text style={styles.text}>type: {type}</Text>
                  <Text style={styles.text}>damage: {damage}</Text>
                </CardItem>
              ))}
              <Text style={styles.headerText}>Special Attacks</Text>
              {pokemon.attacks.special.map(({ name, type, damage }, i) => (
                <CardItem style={{ flexDirection: 'column' }} key={i}>
                  <Text style={styles.text}>{name}</Text>
                  <Text style={styles.text}>type: {type}</Text>
                  <Text style={styles.text}>damage: {damage}</Text>
                </CardItem>
              ))}
              <CardItem style={{ flexDirection: 'column' }} />
              {/* <CardItem footer>
                <Text style={styles.text}>{name}</Text>
              </CardItem> */}
            </Card>
          </ScrollView>
        )
      }}
    </Query>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  },
  headerText: {
    alignSelf: 'center',
    fontFamily: 'pokemon',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 12,
    fontFamily: 'pokemon'
  }
})

export default PokemonDetails
