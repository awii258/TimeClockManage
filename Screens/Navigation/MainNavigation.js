import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './MainScreen';
import LoginScreen from '../AuthScreens/LoginScreen';
import SignupScreen from '../AuthScreens/SignupScreen';
import LoginPin from '../AuthScreens/LoginPin';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        {/* <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        
        name="LoginPin"
        component={LoginPin}
        options={{headerShown:false}}
        
        /> */}
        <Stack.Screen
        
        name="Tabs"
        component={Tabs}
        options={{headerShown:false}}
        
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})