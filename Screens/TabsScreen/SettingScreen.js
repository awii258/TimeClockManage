import {StyleSheet, Text, View, Image,FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from './../../assets/fonts/colors/colors';




import Flatdata from '../TabsScreen/Flatdata1'
import data2 from './Flatdata2';
const SettingScreen = ({navigation}) => {
  const onClick=(friend)=>{
switch(friend){
  case "Edit Profile":
    navigation.navigate('EditProfil')
    break;
    case "Delivery Address":
      navigation.navigate('Delivery')
      break;
      case "Rate & Review":
        navigation.navigate('FeedBack')
        break
    default:
}
  }


  return (
    <>   
    
   
     
        <View style={styles.User}>
          <View style={styles.Users}>
       <Image
       source={require("../../assets/image/set10.png")}/>
          <View style={styles.ProfileDescription}>
          <Text style={styles.txt1}>Barbara Roberts</Text>
          <Text style={styles.txt}>barbararobert@gmail.com</Text>
          
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Edit Profile")}
   style={styles.Edit}>
    <Text style={{fontSize:14,fontWeight:'400',color:'rgba(255, 255, 255, 1)'}}>
      Edit Profile
    </Text>
   </TouchableOpacity>
   </View>
        </View>
  
        <Text style={styles.settings}>CONTENT</Text>
        <FlatList
   keyExtractor={(friend)=>friend.title}
    data={Flatdata} 
    renderItem={({item})=>{
return (
  
  <TouchableOpacity style={{flex:1,backgroundColor:colors.backgroundBlack}} onPress={()=>{onClick(item.title)}}>
  
  <View style={styles.toucable}>
  <View style={{flexDirection:'row'}}>
    <Image source={item.image}/>
{/* <Text style={{paddingLeft:'3%',paddingRight:'3%'}}>{item.image}</Text> */}
<Text style={styles.title}>{item.title}</Text>
</View>
<Text>{item.arrow}</Text>
</View>
</TouchableOpacity>

)

    }}/>
    <Text style={styles.settings}>PREFERENCES</Text>
    <FlatList
   keyExtractor={(friend)=>friend.title}
    data={data2} 
    renderItem={({item})=>{
return (
  
  <TouchableOpacity style={{flex:1,backgroundColor:colors.backgroundBlack}} onPress={()=>{onClick(item.title)}}>
  <View style={styles.toucable}>
  <View style={{flexDirection:'row'}}>
  <Image source={item.image}/>
{/* <Text style={{paddingLeft:'3%',paddingRight:'3%'}}>{item.image}</Text> */}
<Text style={styles.title}>{item.title}</Text>
</View>
<Text>{item.arrow}</Text></View>
</TouchableOpacity>

)

    }}/>
     
 
    </>

  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.backgroundBlack,
   
  },
  container1: {
 
 
  },
  header: {
    width: 25,
    height: 25,
  },
  User: {
    
    // marginTop: '2%',
    backgroundColor:colors.backgroundBlack,
   
    
    // flexDirection:'row'
  },
  Users:{
    marginTop:"5%",
    alignItems:'center',
    justifyContent:'center',
  },
  txt:{
    color:colors.black,
    fontSize:14,
    fontWeight:'400',
    marginTop:'1.8%'
  },
  txt1:{
    color:colors.black,
    fontSize:24,
    fontWeight:'600'
  },
  ProfileDescription:{
// paddingLeft:'5%',
justifyContent:'center',
marginTop:'2%'
  },
  settings:{ 
    paddingTop:'5%',
    paddingBottom:'5%',
    fontSize:14,
    fontWeight:'400',
    color:colors.black,
    paddingLeft:'5%'
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
      Edit:{width:200,height:48,backgroundColor:colors.purple,alignItems:'center',justifyContent:'center',borderRadius:5,marginTop:'3%',marginBottom:'5%'}
});
