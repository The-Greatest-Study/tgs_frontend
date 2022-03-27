import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import TestLogo from '../../../assets/images/test.jpg';

const onDeveloping = () => {
  Alert.alert('개발중입니다!!');
};

const HomeScreen = () => {
  return (
    <ImageBackground source={TestLogo} resizeMode="cover" style={styles.bgImg}>
      <View>
        <Text style={styles.redTitle}>홈 화면입니다.</Text>
        <TouchableNativeFeedback
          onPress={onDeveloping}
          background={
            Platform.OS === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : ''
          }>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              추천 {Platform.OS !== 'android' ? '(Android only)' : ''}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    height: '100%',
    justifyContent: 'center',
  },
  redTitle: {
    alignSelf: 'center',
    backgroundColor: 'yellow',
    color: 'black',
    fontSize: 40,
    fontFamily: 'Maplestory-Bold',
    padding: 20,
    marginBottom: 100,
    borderRadius: 20,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignSelf: 'center',
    backgroundColor: 'orange',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 50,
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

export default HomeScreen;
