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
import React, {useState} from 'react';
import colors from '../../assets/fonts/colors/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Horizontal = ({title,newstyle,newTxtStyle,newstyle1}) => {
  return (
    <View style={{flexDirection: 'row', paddingHorizontal: '4%'}}>
      <View style={[styles.first,newstyle]} />
      <Text
        style={[styles.second,newTxtStyle]}>
        {title}
      </Text>
      <View
        style={[styles.first,newstyle]}
      />
    </View>
  );
};
export default Horizontal;
const styles = StyleSheet.create({
  first: {
    backgroundColor: "#7A7A7A",
    height: 1,
    flex: 0.5,
    alignSelf: 'center',
   
  },
  second:
  {
    alignSelf: 'center',
    paddingHorizontal: hp('1%'),
    fontSize: 14,
    color: "#7A7A7A",
    fontWeight:'500'
  }
});
