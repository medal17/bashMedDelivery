import 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import SplashScreen from './screens/splashScreen';
// import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';


const Stack = createNativeStackNavigator();
const globalScreenOptions={
  headerShown:false,
  headerStyle:{backgroundColor:'red'},
  headerTitleStyle:{color:'red'},
  headerTintColor:'red'
}
// const navigation = useNavigation();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='login' component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
