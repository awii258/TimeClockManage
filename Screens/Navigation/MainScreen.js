import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React from 'react'

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.StaffText}>StaffTrek</Text>
      <View style={styles.firstView}>
        <TouchableOpacity style={styles.loginBack} onPress={()=> navigation.navigate("LoginScreen")}><Text style={styles.loginText}>Login</Text></TouchableOpacity>
         <TouchableOpacity style={styles.getStartedBack}>
         <Text style={styles.getStartedText} onPress={()=>navigation.navigate("Tabs")} >Get Started</Text>
         </TouchableOpacity>
       
      </View>

    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#5B36D4',
    
    justifyContent: "center",
    alignItems: "center"
  },
  firstView: {
    flex:0.01 ,
    marginTop:50,
    flexDirection:"column",
    
   
  },
  StaffText: {
    fontSize: 64,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  loginText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#5B36D4',
    
  },
  getStartedText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#5B36D4',
  },
  loginBack: {
    marginTop:25,
    width: 340,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
    
  },
  getStartedBack: {
    marginTop:25,
    width: 340,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center'
  }

})