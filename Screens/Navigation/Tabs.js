import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CalenderScreen from "../TabsScreen/CalenderScreen";
import HomeScreen from "../TabsScreen/HomeScreen";
import SettingScreen from "../TabsScreen/SettingScreen";
import ShiftScreen from "../TabsScreen/ShiftScreen";
import TimeSheets from "../TabsScreen/TimeSheets";
import HomeScreen2 from '../TabsScreen/HomeScreenSecond'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
          // tabBarOptions={{
          //   keyboardHidesTabBar: true,
          // }}
    
          screenOptions={{
            // keyboardHidesTabBar: true,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#927E5A",
            tabBarInactiveTintColor: "#96A7AF",
    
            tabBarStyle: {
              position: "absolute",
              //    bottom: 25,
              // marginLeft: 15,
              // marginRight: 15,
              borderTopColor: "#000000",
              backgroundColor: '#5B36D4',
              height:81,
              justifyContent: "space-evenly",
              alignItems: "center",
            },
          }}
          initialRouteName="Home"
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen2}
            options={{
              headerShown:false,
              tabBarLabel: "Home",
              tabBarShowLabel: false,
              headerTintColor: "#927E5A",
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#927E5A",
                fontFamily: "BaskervilleRegular",
                textTransform: "uppercase",
                fontSize: 24,
              },
              // headerStyle: {
              //   backgroundColor: "#080402",
              //   borderBottomColor: "#927E5A",
              //   borderBottomWidth: 1,
              //   borderTopWidth: 1,
              //   borderTopColor: "#927E5A",
              // },
            //   headerRight: () => <HeaderIcon RIGHT={10} />,
    
              tabBarIcon: ({ focused, size, color }) => (
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      tintColor: focused ? "#FFFFFF" : "#F0F0F0",
                      height: 24,
                      width: 24,
                      margin: 5,
                    }}
                    resizeMode="contain"
                    source={require("../../assets/image/Home.png")}
                  />
    
                  <Text
                    style={{
                      color: focused ? "#FFFFFF" : "#F0F0F0",
                      alignItems: "center",
                      fontSize: 11,
                      fontFamily: "OpenSansRegular",
                    }}
                  >
                    Home
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Calender"
            component={CalenderScreen}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              title:"Restaurants",
              headerTintColor: "#927E5A",
              headerTitleAlign: "center",
              headerTitleStyle: {
                
                color: "#927E5A",
                fontFamily: "BaskervilleRegular",
                textTransform: "uppercase",
                fontSize: 24,
              },
              // headerStyle: {
              //   backgroundColor: "#080402",
              //   borderBottomColor: "#927E5A",
              //   borderBottomWidth: 1,
              //   borderTopWidth: 1,
              //   borderTopColor: "#927E5A",
              // },
            //   headerRight: () => <HeaderIcon RIGHT={10} />,
    
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      tintColor: focused ? "#FFFFFF" : "#F0F0F0",
                      height: 24,
                      width: 24,
                      margin: 5,
                    }}
                    resizeMode="contain"
                    source={require("../../assets/image/Calendar.png")}
                  />
    
                  <Text
                    style={{
                      color: focused ? "#FFFFFF" : "#F0F0F0",
                      alignItems: "center",
                      fontSize: 10.5,
                      fontFamily: "OpenSansRegular",
                    }}
                  >
                     Calendar
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Shift"
            component={ShiftScreen}
            initialParams={{ fromScreen: "access" }}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              title: "Queue Jump",
              headerTintColor: "#927E5A",
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#927E5A",
                fontFamily: "BaskervilleRegular",
                textTransform: "uppercase",
                fontSize: 24,
              },
              // headerStyle: {
              //   backgroundColor: "#080402",
              //   borderBottomColor: "#927E5A",
              //   borderBottomWidth: 1,
              //   borderTopWidth: 1,
              //   borderTopColor: "#927E5A",
              // },
            //   headerRight: () => <HeaderIcon RIGHT={10} />,
    
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      tintColor: focused ? "#FFFFFF" : "#F0F0F0",
                      height: 24,
                      width: 24,
                      margin: 5,
                      // marginRight:20,
                      // marginRight: Platform.OS === "ios" ?20:0,
                    }}
                    resizeMode="contain"
                    source={require("../../assets/image/Shift.png")}
                  />
    
                  <Text
                    style={{
                        color: focused ? "#FFFFFF" : "#F0F0F0",
                      alignItems: "center",
                      fontSize: 10.5,
                      fontFamily: "OpenSansRegular",
                      // marginBottom:10,
                      // marginRight:10,
                      // marginRight: Platform.OS === "ios" ?10:0,
                    }}
                  >
                    Shift
                  </Text>
                </View>
              ),
            }}
          />
    
          <Tab.Screen
            name="TimeSheets"
            component={TimeSheets}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              headerTintColor: "#927E5A",
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#927E5A",
                fontFamily: "BaskervilleRegular",
                textTransform: "uppercase",
                fontSize: 24,
              },
              // headerStyle: {
              //   backgroundColor: "#080402",
              //   borderBottomColor: "#927E5A",
              //   borderBottomWidth: 1,
              //   borderTopWidth: 1,
              //   borderTopColor: "#927E5A",
              // },
            //   headerRight: () => <HeaderIcon RIGHT={10} />,
    
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center" }}>
                  <Image
                    style={{
                      tintColor: focused ? "#FFFFFF" : "#F0F0F0",
                      height: 26.67,
                      width: 24,
                      margin: 5,
                    }}
                    resizeMode="contain"
                    source={require("../../assets/image/Time.png")}
                  />
    
                  <Text
                    style={{
                      color: focused ? "#FFFFFF" : "#F0F0F0",
                      textAlign: "center",
                      fontSize: 10.5,
                      fontFamily: "OpenSansRegular",
                    }}
                  >
                    Timesheets
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{
              tabBarShowLabel: false,
            
              headerShown: false,
            //   title: <Images />,
              headerTintColor: "#927E5A",
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#927E5A",
                fontFamily: "BaskervilleRegular",
                textTransform: "uppercase",
                fontSize: 24,
              },
              headerStyle: {
                backgroundColor: "#080402",
                borderBottomColor: "#927E5A",
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderTopColor: "#927E5A",
                // justifyContent:"flex-end"
              },
    
            //   headerRight: () => <HeaderIcon RIGHT={10} />,
    
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      tintColor: focused ? "#FFFFFF" : "#F0F0F0",
                      height: 20,
                      width: 20,
                      margin: 5,
                    }}
                    resizeMode="contain"
                    source={require("../../assets/image/Settings.png")}
                  />
    
                  <Text
                    style={{
                        color: focused ? "#FFFFFF" : "#F0F0F0",
                      alignItems: "center",
                      fontSize: 10.5,
                      fontFamily: "OpenSansRegular",
                    }}
                  >
                    Settings
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default Tabs

const styles = StyleSheet.create({})