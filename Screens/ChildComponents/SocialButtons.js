import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/fonts/colors/colors';
import React from 'react';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Buttons = () => {
  return (
    <View style={styles.socialButtons}>
      <View style={styles.Google}>
        <TouchableOpacity style={styles.Touchable}>
          <Image
            source={require('../../assets/image/google.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>Login with google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Google}>
        <TouchableOpacity style={styles.Touchable}>
          <Image
            source={require('../../assets/image/facebook.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>login with facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Buttons;
const styles = StyleSheet.create({
  socialButtons: {
    flexDirection: 'row',
    // justifyContent:'space-evenly',
    alignItems: 'center',
  },
  Touchable: {
    flexDirection: 'row',
    // paddingHorizontal: '5%',
    alignItems: 'center',
  },
  Google: {
    height:70,
    width:184,
   margin:'3%',
    borderRadius: 10,
    borderColor: colors.purple,
    backgroundColor: "#FFFFFF",
    borderWidth:1,
    justifyContent:'center'
  },
  txt: {
    fontFamily: 'Poppins-Bold',
    color: colors.black,
    textAlign:"justify"
  },
  img: {
    margin: hp('2%'),
    width:18,
    height:18
  },
  email: {
    backgroundColor: colors.purple,
  },
});
