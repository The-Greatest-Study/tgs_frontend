/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TestLogo from './assets/images/test.jpg';
import Navigation from './src/navigation';
import SignInScreen from './src/screens/SignInScreen';

export default class App extends Component {
  render() {
    return (
      
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#48CAE1',
  },
  safeAreaStyle: {
    backgroundColor: '#B2CCFF',
    margin: 50,
    borderRadius: 20,
  },
  redTitle: {
    alignSelf: 'center',
    backgroundColor: '#B2CCFF',
    color: '#F15F5F',
    fontSize: 40,
    fontFamily: 'Maplestory-Bold',
    padding: 20,
    marginBottom: 100,
    borderRadius: 20,
  },
  bgImg: {
    flex: 1,
    justifyContent: 'center',
  },
});
