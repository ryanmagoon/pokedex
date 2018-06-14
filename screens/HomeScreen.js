import React, { Fragment } from 'react'
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { WebBrowser } from 'expo'

import { MonoText } from '../components/StyledText'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={require('../assets/images/Pokémon_logo.png')}
            style={styles.welcomeImage}
          />

          <Text style={styles.developmentModeText}>Pokédex</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
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
  developmentModeText: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'pokemon'
  },
  welcomeImage: {
    width: '85%',
    height: '25%',
    resizeMode: 'contain',
    marginBottom: 25
  },
  helpLinkText: {
    fontSize: 16,
    color: '#2e78b7',
    fontFamily: 'pokemon'
  }
})
