import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'native-base'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const {
      navigation: { navigate }
    } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={require('../assets/images/pokemon_logo.png')}
            style={styles.welcomeImage}
          />
          <Text style={styles.text}>Bootleg Pokédex</Text>
          <Image
            source={require('../assets/images/pikachu.gif')}
            style={styles.pikachu}
          />
          <Button
            bordered
            dark
            style={styles.button}
            onPress={() => {
              navigate('List')
            }}
          >
            <Text style={styles.buttonText}>Start</Text>
          </Button>
          <Text style={[styles.text, { marginBottom: 15 }]}>
            © Ryan Magoon 2018
          </Text>
          <Text style={styles.text}>Zero rights reserved.</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginVertical: 35
  },
  buttonText: {
    fontFamily: 'pokemon',
    paddingHorizontal: 15
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#dc0b2d'
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'pokemon'
  },
  pikachu: {
    width: '65%',
    height: '35%',
    resizeMode: 'cover'
  },
  welcomeImage: {
    width: '85%',
    height: '25%',
    resizeMode: 'contain',
    marginBottom: 25
  }
})
