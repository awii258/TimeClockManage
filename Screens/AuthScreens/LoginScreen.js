import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
  } from 'react-native';
  import React, {useContext, useState} from 'react';
  import colors from '../../assets/fonts/colors/colors';

  import Icon from 'react-native-vector-icons/Feather';
  import Buttons from '../ChildComponents/SocialButtons';

  import Horizontal from '../ChildComponents/Horizontal';
  
  import Button from '../ChildComponents/Button';
 
  
  const LoginScreen = ({navigation}) => {
   
    const [isFocus, setIsFocus] = useState(false);
    const [username, setUserName] = useState();
    const [password,setPassword] = useState();
  
    return (
        <>
      <ScrollView
        contentContainerStyle={{paddingBottom: '25%'}}
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        {/* <Eclipse style={{margin: -60}} /> */}

        <View style={styles.container5}>
        <View >
          <View style={styles.containter3}>
            <Text style={styles.stafText}>StaffTrek</Text>
          </View>
          </View>
          </View>
        <View style={styles.container1}>
          <View style={{marginTop: '7%'}}>
            <Text style={styles.signup}>Login</Text>
            <Text style={styles.Details}>Enter account details</Text>
          </View>
  
          <View style={{marginTop: '2%'}}>
            <View style={styles.inputs}>
             
             <Image source={require('../../assets/image/email.png')}
             style={{marginRight:10,alignSelf:'center'}}
             />
              <TextInput
                placeholder="Email"
                value={username}
                onChangeText ={(text)=>setUserName(text)}
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
            <View>
              
              <View
                style={[
                  styles.Password,
                 
                ]}
                
                onFocus={() => {
                  setIsFocus(true);
                }}
                onBlur={() => {
                  setIsFocus(false);
                }}>
                  <Image source={require('../../assets/image/password.png')}
            //  style={{marginRight:10}}
             />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={(text)=>setPassword(text)}
                  style={styles.passwordInput}
                  placeholderTextColor="#ADADB8"
                />
                <Image
                            source={require('../../assets/image/eye.png')}
                            style={{marginRight:10}}
                            />
                
              </View>
            </View>
            <View style={styles.forget}>
              <Text
                style={styles.forgetPasText}
                onPress={() => {
                  // navigation.navigate('RessetPassword');
                }}>
                Forget Password?
              </Text>
            </View>
  
            <View>
              <View style={styles.SignupbtnView}>
                <Button
                  Title="Login"
                  onPress={() => {
                   
                    navigation.navigate('LoginPin');
                  }}
                />
              </View>
  
              <View
                style={{
                  alignItems: 'center',
  
                  justifyContent: 'center',
                  marginTop: '11%',
                }}>
               
  
                <View style={{paddingTop: '10%'}}>
                  <Horizontal title={'OR'}/>
                  <View style={{paddingTop: '2%'}}>
                    <Buttons />
                  </View>

                </View>
                <Text style={styles.Alreadyact}>
                  Don't have an account?
                  <Text
                    style={{color: colors.purple}}
                    onPress={() => {
                      navigation.navigate('SignupScreen');
                    }}>
                    SIGN UP
                  </Text>
                </Text>
              </View>
            </View>
            {/*<View style={{margin: '5%'}}>
              <Horizontal />
                  </View>*/}
            {/*<View style={styles.SocialBtn}>
              <Buttons />
                  </View>*/}
          </View>
        </View>
      </ScrollView>
      </>
    );
  };
  export default LoginScreen;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.backgroundBlack,
    },
    container5: {
      flex:0.8,
      height:192,
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
    container1: {
      flex: 1,
      paddingRight: '8%',
      paddingLeft: '8%',
    },
    signup: {
      color: colors.lightGrey,
      fontFamily: 'Poppins',
      fontSize: 30,
      //left: '5%',
      fontWeight: 'bold',
    },
    Details:{
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
    },
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
    signuptxt: {
      color: colors.touchablewhite,
      fontWeight: '900',
    },
    SignupbtnView: {
      alignItems: 'center',
      marginTop: '20%',
    },
    Alreadyact: {
      color: colors.lightGrey,
      fontWeight: '500',
      marginTop:'10%'
    },
    SocialBtn: {
      //alignItems: 'center',
      // marginVertical: '5%',
    },
    forget: {
      //alignSelf:'flex-end',
      alignItems: 'flex-start',
    },
    forgetPasText: {
      color: colors.purple,
      fontWeight: '500',
      fontSize: 14,
      marginLeft:'1%'
    },
  });
  