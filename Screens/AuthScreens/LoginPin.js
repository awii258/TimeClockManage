import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import colors from '../../assets/fonts/colors/colors'
import Button from '../ChildComponents/Button'

const LoginPin = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View >
          <View style={styles.containter1}>
            <Text style={styles.stafText}>StaffTrek</Text>
          </View>
          </View>
          </View>
          
      <View style={styles.container2}>
      
        <View style={styles.VerificationView}>
         <Text style={styles.VerificationText}>Verification Complete</Text>
         <Image 
          source={require('../../assets/image/True.png')}
          style={styles.trueImage}
          /></View>
         <View style={styles.ImageView}>
          
          <View style={styles.SignupbtnView}>
                <Button
                  Title="Get In"
                  onPress={() => {
                   
                    navigation.navigate('Tabs');
                  }}
                />
              </View>
         </View>
     
      </View>
    </>
  )
}

export default LoginPin

const styles = StyleSheet.create({

  container: {
    flex: 0.3,
    height:192,
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center'

  },
  container1: {
    alignItems: 'center',
    backgroundColor: colors.purple,


  },
  stafText: {
    color: colors.backgroundBlack,
    fontWeight: "600",
    fontSize: 48,
    fontFamily: 'Nunito'

  },
  container2: {
    flex: 1,
    backgroundColor: colors.backgroundBlack,
    alignItems:'center',

  },
  VerificationText:{
    fontSize:24,
    fontWeight:'500',
    fontFamily:"Poppins",
    marginTop:"30%"

  },
  VerificationView:{
  flex:0.4,
  justifyContent:"center",
  alignItems:"center",
  color:colors.black,
 
  
  },
  trueImage:{
width:106,
height:106,
marginTop:25
  },
  ImageView:{
  // flex:0.5,
  alignItems:'center',
  flexDirection:"column",
  justifyContent:"space-between"
  },
  SignupbtnView: {
    alignItems: 'center',
    marginTop: '25%',
  },



})