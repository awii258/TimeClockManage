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
import EditScreen from '../EditScreen';

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
        <Stack.Screen
        
        name="Edit Profile"
        component={EditScreen}
        options={{
          headerTintColor: "#FFFFFF",
           headerTitleStyle: {
         
          color: "#FFFFFF",
          fontFamily: "Poppins",
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: "rgba(91, 54, 212, 1)",
          },}}
        
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})