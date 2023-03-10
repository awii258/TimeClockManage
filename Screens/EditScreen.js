import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import colors from '../assets/fonts/colors/colors'
import { AntDesign } from '@expo/vector-icons'; 

const EditScreen = () => {
  return (<>
    <View style={styles.User}>
      <View style={styles.Users}>
        <Image
          source={require("../assets/image/set10.png")} />
        <View style={styles.ProfileDescription}>
          <Text style={styles.txt1}>Barbara Roberts</Text>
          <Text style={styles.txt}>barbararobert@gmail.com</Text>

        </View>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("Edit Profile")}
   style={styles.Edit}>
    <Text style={{fontSize:14,fontWeight:'400',color:'rgba(255, 255, 255, 1)'}}>
      Edit Profile
    </Text>
   </TouchableOpacity> */}
      </View>
      <View style={styles.container1}>
      <View style={styles.inputs}>
        <Image source={require('../assets/image/name.png')}
          style={{ marginRight: 10, alignSelf: 'center' }}
        />
        <TextInput placeholder='Change Name'

          placeholderTextColor="#ADADB8"

        />

      </View>

      <View style={styles.inputs}>
        <Image source={require('../assets/image/phone.png')}
          style={{ marginRight: 10, alignSelf: 'center' }}
        />

        <TextInput placeholder='Change Phone No'

          placeholderTextColor="#ADADB8"
        // value={values.phone}


        />
      </View>

      </View>

 
        <TouchableOpacity style={{  backgroundColor: colors.backgroundBlack,marginTop:"5%", }}>

          <View style={styles.toucable}>
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
              <Image source={require('../assets/image/set12.png')} />
              {/* <Text style={{paddingLeft:'3%',paddingRight:'3%'}}>{item.image}</Text> */}
              <Text style={styles.title}>Upload Resume</Text>
            </View>
            <AntDesign name="right" size={18} color="
        rgba(122, 122, 122, 1)" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{  backgroundColor: colors.backgroundBlack }} >

          <View style={styles.toucable}>
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
              <Image source={require('../assets/image/set11.png')} />
              {/* <Text style={{paddingLeft:'3%',paddingRight:'3%'}}>{item.image}</Text> */}
              <Text style={styles.title}>Upload Certificate</Text>
            </View>
            <AntDesign name="right" size={18} color="
        rgba(122, 122, 122, 1)" />
          </View>
        </TouchableOpacity>
<View style={{alignItems:'center',marginTop:'10%'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Edit Profile")}
   style={styles.Edit}>
    <Text style={{fontSize:14,fontWeight:'400',color:'rgba(255, 255, 255, 1)'}}>
      Edit Profile
    </Text>
   </TouchableOpacity>
   </View>
    </View>
  </>
  )
}

export default EditScreen

const styles = StyleSheet.create({
  User: {
    flex: 1,
    // marginTop: '2%',
    backgroundColor: colors.backgroundBlack,


    // flexDirection:'row'
  },
  container1:{
    marginTop:"13%",
    paddingRight: '4%',
    paddingLeft: '4%'
  },
  Users: {
    marginTop: "5%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '400',
    marginTop: '1.8%'
  },
  txt1: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '600'
  },
  ProfileDescription: {
    // paddingLeft:'5%',
    justifyContent: 'center',
    marginTop: '2%'
  },
  inputs: {
    
    flexDirection: 'row',
    backgroundColor: colors.inputBackground,
    marginTop: '3%',
    borderRadius: 10,
    color: colors.touchablewhite,
    fontWeight: '500',
    fontSize: 17,
    fontFamily: 'Poppins',
    marginBottom: '5%',
    paddingVertical: '6.5%',
    //paddingLeft: '5%'
    paddingHorizontal: '8%',
    paddingLeft: '5%',


  },
  toucable:{
    flexDirection:'row',
padding:'4%',
justifyContent:'space-between'
  
    
  },
  title:{
    color:colors.black,
    paddingLeft:'3%'
  

  },

  Edit: { width: 200, height: 48, backgroundColor: colors.purple, alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginTop: '3%', marginBottom: '5%' },
})