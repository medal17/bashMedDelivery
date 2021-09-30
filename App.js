import 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import SplashScreen from './screens/splashScreen';
// import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ShowItemDetails from './screens/ShowItemDetails';


const Stack = createNativeStackNavigator();
// const globalScreenOptions={
//   headerStyle:{backgroundColor:'red'},
//   headerTitleStyle:{color:'red'},
//   headerTintColor:'red',
//   header
// }
// const navigation = useNavigation();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='splashScreen' component={SplashScreen}/>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='signup' component={SignupScreen}/>
        <Stack.Screen name='homeScreen' component={HomeScreen}/>
        <Stack.Screen name='showItemDetails' component={ShowItemDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


