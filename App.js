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
import SignInScreen from './src/screens/SignInScreen';
import TestLogo from './assets/images/test.jpg';

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source={TestLogo}
        resizeMode="cover"
        style={styles.bgImg}>
        <Text style={styles.redTitle}>오늘, 뭐먹지?</Text>
        <SafeAreaView style={styles.safeAreaStyle}>
          <SignInScreen />
        </SafeAreaView>

        <Text style={styles.blueNotice}></Text>
      </ImageBackground>
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
