import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../assets/fonts/colors/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Button = ({props, Title, onPress, futureBtn}) => {
  return (
    //<View style={styles.loginBtn}>
    <TouchableOpacity
      style={[styles.Signup, futureBtn]}
      {...props}
      onPress={onPress}>
      <Text style={styles.btntxt} {...props}>
        {Title}
      </Text>
    </TouchableOpacity>
    //</View>
  );
};

export default Button;

const styles = StyleSheet.create({
  Signup: {
    backgroundColor: colors.purple,
    //  paddingHorizontal:'28%',
    //  paddingVertical:'5%',
    width: hp('44%'),
    height: hp('6.5%'),

    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  loginBtn: {
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  btntxt: {
    color: colors.touchablewhite,
    fontWeight: '900',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
});
