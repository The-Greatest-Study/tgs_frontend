import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../screens/SignInScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='SignIn' component={SignInScreen} options={{headerShown: false}}/>
              <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation