import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Dimensions, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import colors from '../../assets/fonts/colors/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Buttons from '../ChildComponents/SocialButtons'

import Horizontal from '../ChildComponents/Horizontal'
import Icon from 'react-native-vector-icons/Feather';
import Button from '../ChildComponents/Button'
// import Eclipse from '../assets/image/Eclipse.svg'






const SignupScreen = ({ navigation }) => {


    const [isFocus, setIsFocus] = useState(false)







    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}
            showsVerticalScrollIndicator={false}

            style={styles.container}
        >
            <View style={styles.container5}>
                <View >
                    <View style={styles.containter3}>
                        <Text style={styles.stafText}>StaffTrek</Text>
                    </View>
                </View>
            </View>
            {/* <Eclipse style={{ margin: -60 }} /> */}
            <View style={styles.container1}>

                <View style={{ top: '7%' }}>
                    <Text style={styles.signup}>Create Account</Text>
                    <Text style={styles.Details}>Enter details</Text>
                </View>


                <View style={{ top: hp('10%') }}>
                    <View style={styles.inputs}>
                    <Image source={require('../../assets/image/name.png')}
             style={{marginRight:10,alignSelf:'center'}}
             />
                        <TextInput placeholder='Name'
                           
                            placeholderTextColor="#ADADB8"

                        />

                    </View>

                    <View style={styles.inputs}>
             
             <Image source={require('../../assets/image/email.png')}
             style={{marginRight:10,alignSelf:'center'}}
             />
              <TextInput
                placeholder="Email"
                
                // style={[
                //   styles.inputs,
                  
                // ]}
                placeholderTextColor="#ADADB8"
                onFocus={() => {
                  setIsFocus(true);
                }}
                onBlur={() => {
                  setIsFocus(false);
                }}
              />
            </View>

                    <View style={styles.inputs}>
                    <Image source={require('../../assets/image/phone.png')}
             style={{marginRight:10,alignSelf:'center'}}
             />
                       
                        <TextInput placeholder='Phone Number'
                           
                            placeholderTextColor="#ADADB8"
                        // value={values.phone}


                        />
                    </View>

                    <View>
                    <View
                            style={[styles.Password,
                            isFocus && { borderColor: colors.green, borderWidth: 1 }]}
>
<Image source={require('../../assets/image/password.png')}
            //  style={{marginRight:10,alignSelf:'center'}}
             />
                            <TextInput placeholder='Password'
                                style={[styles.passwordInput]}
                                // value={values.password}
                                placeholderTextColor="#ADADB8"

                            />
                            <Image
                            source={require('../../assets/image/eye.png')}
                            style={{marginRight:10}}
                            />
                        </View>
                        

                    </View>


                    <View >
                        <View style={styles.SignupbtnView}>

                            <Button Title='Create Account' />
                        </View>
                        <View style={{ alignItems: "flex-start", marginTop: '4%', marginLeft: 3 }}>
                            <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")}>
                            <Text style={styles.Alreadyact}>
                                Already have an account?</Text></TouchableOpacity>

                        </View>

                    </View>
                    {/* <View style={{ margin: '5%' }}>
                                <Horizontal title="Or signup with" />
                            </View>

                            <View style={styles.SocialBtn}>
                                <Buttons />
                            </View> */}
                </View>





            </View>

        </ScrollView>
    )
}
export default SignupScreen;
const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.backgroundBlack,

    },
    container1: {

        flex: 1,
        paddingRight: '8%',
        paddingLeft: '8%'
    },
    container5: {
        flex: 0.8,
        height: 192,
        backgroundColor: colors.purple,
        alignItems: 'center',
        justifyContent: 'center'

    },
    container3: {
        alignItems: 'center',
        backgroundColor: colors.purple,


    },
    stafText: {
        color: colors.backgroundBlack,
        fontWeight: "600",
        fontSize: 48,
        fontFamily: 'Nunito'

    },
    signup: {
        color: colors.lightGrey,
        fontFamily: 'Poppins',
        fontSize: 30,
        //left: '5%',
        fontWeight: 'bold',
    },
    Details: {
        color: "#7A7A7A",
        fontFamily: 'Poppins',
        fontSize: 16,
        //left: '5%',
        fontWeight: '400',
    },
   
    labels: {
        color: colors.lightGrey,
        fontFamily: 'Poppins',
        fontSize: 17,

    },
    inputs: {
        flexDirection:'row',
      backgroundColor: colors.inputBackground,
      marginTop: '3%',
      borderRadius: 10,
      color: colors.touchablewhite,
      fontWeight: '500',
      fontSize: 17,
      fontFamily: 'Poppins',
      marginBottom: '5%',
      paddingVertical: '4%',
      //paddingLeft: '5%'
      paddingHorizontal: '8%',
      paddingLeft: '5%',


    },


    Signup: {
        backgroundColor: colors.green,
        borderRadius: 28.5,
        alignItems: 'center',

    }
    ,
    Password: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.inputBackground,
        borderRadius: 10,
        marginBottom: '2%',
        paddingVertical: '4%',
        paddingLeft: '5%',
        paddingHorizontal: '2%',
        marginTop: '3%',

    },
    icon: {
        paddingRight: 10,
        color: colors.lightGrey,

    },
    passwordInput: {
        flex: 1,
      color: colors.touchablewhite,
      fontWeight: '500',
      fontSize: 17,
      fontFamily: 'Poppins',
  
      paddingLeft: 14,
    },
    signuptxt:
    {
        color: colors.touchablewhite,
        fontWeight: '900',
    }
    ,
    SignupbtnView: {
        marginTop:'10%',
        alignItems: 'center',


    },
    Alreadyact: {
        color: colors.purple,
        fontWeight: '500'
    },
    SocialBtn
        : {

        alignContent: 'center',
        // justifyContent:'center'
        // marginVertical: '5%',


    }
})