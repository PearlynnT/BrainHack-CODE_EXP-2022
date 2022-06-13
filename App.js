import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
/*
import LoginScreen from './src/screens'
import HomeScreen from './src/screens'
import RegistrationScreen from './src/screens'
*/

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" children={() => (<LoginScreen/>)} />
            <Stack.Screen name="Registration" children={() => (<RegistrationScreen/>)} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
