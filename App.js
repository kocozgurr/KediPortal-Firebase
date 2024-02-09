
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fetch from './screens/Fetch';
import KediDetay from './screens/KediDetay';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';

export default function App()
{
  const Stack = createStackNavigator();

  return (
    //sayfalar arası gecıs ıcın  //npm install @react-navigation/native @react-navigation/stack
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Fetch" component={Fetch} options={{ headerShown: false }} />
        <Stack.Screen name="KediDetay" component={KediDetay} options={{ headerShown: false }} />
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
