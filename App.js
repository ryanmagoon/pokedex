import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { AppLoading, Asset, Audio, Font } from 'expo'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import RootNavigation from './navigation/RootNavigation'

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql'
})

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <ApolloProvider client={client}>
          <SafeAreaView style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <RootNavigation />
          </SafeAreaView>
        </ApolloProvider>
      )
    }
  }

  _loadResourcesAsync = async () => {
    // const soundObject = new Expo.Audio.Sound()
    // try {
    //   await soundObject.loadAsync(require('./assets/sounds/opening.mp3'))
    //   await soundObject.stopAsync()
    //   await soundObject.playAsync()
    //   // Your sound is playing!
    // } catch (error) {
    //   // An error occurred!
    // }

    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
        require('./assets/images/pokemon_logo.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        ...MaterialCommunityIcons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        pokemon: require('./assets/fonts/pokemon-font.ttf')
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dc0b2d'
  }
})
