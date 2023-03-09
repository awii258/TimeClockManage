import { StyleSheet, Text, View,Image,FlatList,ScrollView,  Modal, Pressable, } from 'react-native'
import React,{useState} from 'react'
import colors from '../../assets/fonts/colors/colors'
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CalendarStrip from "react-native-calendar-strip";
import { AntDesign } from "@expo/vector-icons";
import Toast  from 'react-native-toast-message'

const DATA = [
  {
    id: '1',
    title: 'Morning Shift',
    time: '6 - 11 pm | 6 hours'
  },
  {
    id: '2',
    title: 'Morning Shift',
    time: '6 - 11 pm | 6 hours'
  },
  {
    id: '3',
    title: 'Morning Shift',
    time: '6 - 11 pm | 6 hours'
  },
];
const newDATA= [
  {
    id: '1',
    title: 'Morning Shift',
    time: '6 - 11 pm | 6 hours'
  },
  {
    id: '2',
    title: 'Morning Shift',
    time: '6 - 11 pm | 6 hours'
  },
  {
    id: '3',
    title: 'Morning Shift',
    time: '6 - 11 pm | 6 hours'
  },
];
const ShiftScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkout,setCheckout]=useState(true);
  const [cancel,setCancel] =useState(false)
  const [work,setWork]=useState(true);
  const [check,setCheck]=useState(false);
  const [all,setAll ]=useState(true);
  const [up,setUp]=useState(false);
  const [past,setPast]=useState(false);
  const [offer,setOffer]=useState(false);
  const a = (ab) => {
    if (ab == "work") {
      setWork(true);
      setCheck(false);
     
    }
    if (ab == "check") {
      setWork(false);
      setCheck(true);
     
    }
   
  };
  // const c = (ab) => {
  //   if (ab == "check out") {
  //     setCheckout(true);
  //     setCancel(false);
     
  //   }
  //   if (ab == "cancel") {
  //     setCheckout(false);
  //     setCancel(true);
     
  //   }
   
  // };
  const b = (ab) => {
    if (ab == "all") {
      setAll(true);
      setUp(false);
      setPast(false);
      setOffer(false);
     
    }
    if (ab == "up") {
      setAll(false);
      setUp(true);
      setPast(false);
      setOffer(false);
    }
    if (ab == "past") {
      setAll(false);
      setUp(false);
      setPast(true);
      setOffer(false);
     
    }
    if (ab == "offer") {
      setAll(false);
      setUp(false);
      setPast(false);
      setOffer(true);
    }
  };
  const checks = ()=>{
    a("check");
    setModalVisible(!modalVisible); }
    const checkouts = ()=>{
     
      setModalVisible(!modalVisible); }
      const cancels = ()=>{
      
        setModalVisible(!modalVisible); }
  // const Item = ({title}) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //     <Text style={styles.title}>{time}</Text>
  //      <AntDesign
  //             style={{ alignSelf: "center" }}
  //             name="right"
  //             size={22}
  //             color="#927E5A"
  //           />
  //   </View>
  // );

  const Toastes =() => {
         Toast.show({
        type:'success',
        position:'top',
        text1:'Success',
        text2:'Job Accepted',
  
      })}
  const renderItem = ( item ) => {
   return (
      <>
    <TouchableOpacity
           style={{ flex: 1,backgroundColor:'#FFFFFF',marginTop:"2%" }}
        >
          <View style={styles.listContainer}>
           
            <View style={{ margin: 12, flex: 2 }}>
              <Text selectable={true} style={{
                color:'#000000',
                fontSize:16,
                fontWeight:'500',
              
              }}>
              Morning Shift
              </Text>
             
             
              <View style={{ flexDirection: "row", alignItems: "center" }}>
               
                <Text
                  selectable={true}
                  style={[
                    styles.textStyle,
                    { color: "#7A7A7A", fontSize: 14,fontWeight:'400',  },
                  ]}
                >
                  6 - 11 pm | 6 hours
                </Text>
              </View>
            </View>

            <AntDesign
              style={{ alignSelf: "center" }}
              name="right"
              size={22}
              color="#000000"
            />
          </View>
        </TouchableOpacity>

       
      </>
    );
  };

  const renderItems = ( item ) => {
    return (
       <> 
     
     <View
            style={{ flex: 1,backgroundColor:'#FFFFFF',marginTop:"3%",margin:'3%' }}
         >
         
           <View style={styles.listContainer}>
   
            
             <View style={{ margin: 2, flex: 1 }}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
               <Text selectable={true} style={{
                 color:'#000000',
                 fontSize:16,
                 fontWeight:'500',
               
               }}>
               Nurse
               </Text>
               <Text style={{alignItems:'center',color:'rgba(91, 54, 212, 0.5)',fontSize:12,fontWeight:'400'}}>Zylker</Text>
               </View>
               <View style={{ flexDirection: "row", alignItems: "center",marginTop:'3%', }}>
                
                 <Text
                   selectable={true}
                   style={[
                     styles.textStyle,
                     { color: "#7A7A7A", fontSize: 14,fontWeight:'400',  },
                   ]}
                 >
                   Sat , 14 AUG 2020
                 </Text>
                 
               </View>
               <View style={{flexDirection:'row',marginTop:'5%'}}>
              <TouchableOpacity
                style={[styles.button1, styles.buttonClose1]}
                // onPress={() =>}
              >
                <Text style={styles.textStyle2}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button1, styles.buttonClose]}
                onPress={()=> Toastes()}
              >
                <Text style={styles.textStyle2}>Accept</Text>
              </TouchableOpacity>
              </View>
             </View>
 
            
           </View>
         </View>
   
 
        
       </>
     );
   };

  return (
    <>    
   
    
    <View style={styles.container} >
  
      <View style={styles.container1}>
      <Toast/>
       <Text style={styles.Management}>Shift Management</Text>
       <Fontisto name="bell-alt" size={24} color="#FFFFFF" style={styles.Ring} />
      </View>

      {/* <View style={styles.container3}>
        <Image 
        source={require('../../assets/image/Ring.png')}
        />
       
      </View> */}
      {/* <View style={styles.container4}>
        <TouchableOpacity style={work?styles.buttonDesign:styles.buttonDesign1}  onPress={() => {
              a("work");
            }}>
        <Text style={styles.button}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity style={check?styles.buttonDesign5:styles.buttonDesign6}  onPress={() => {
             checks() 
            }}>
        <Text style={styles.button}> Check out</Text>
        </TouchableOpacity>
        </View> */}
       
        <View style={styles.container5}>
          <TouchableOpacity  onPress={() => {
              b("all");
            }}>
        <Text style={all?styles.buttonTab:styles.buttonTab1}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
              b("up");
            }}>
        <Text style={up?styles.buttonTab:styles.buttonTab1}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
              b("past");
            }}>
        <Text style={past?styles.buttonTab:styles.buttonTab1}>Past</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
              b("offer");
            }}>
        <Text style={offer?styles.buttonTab:styles.buttonTab1}>Offer</Text>
        </TouchableOpacity>
        </View>
       
      

   
     

    </View>
    
   {all?<View style={{flex:1,backgroundColor:'#FFFFF',}}>
     <View style={{   }}>
     <CalendarStrip
       selectedDate={new Date()}
     
       
       
       // showDayNumber={false}
       // showDayName={false}
       // showDate={false}
       // showMonth={true}
       // highlightColor={"red"}
       calendarAnimation={{ type: "sequence", duration: 30 }}
       daySelectionAnimation={{
         type: "background",
         duration: 200,
         highlightColor: "#5B36D4",
       }}
      
       style={{ height: 100, paddingTop: 20, paddingBottom: 10, }}
       calendarHeaderStyle={{
         color: "#7A7A7A",
         fontFamily: "OpenSansRegular",
         fontSize:20
       }}
      //  calendarColor={"#FFFFFF"}
       dateNumberStyle={{ color: "#7A7A7A", fontFamily: "OpenSansRegular", }}
       dateNameStyle={{ color: "#7A7A7A", fontFamily: "OpenSansRegular", }}
       highlightDateNumberStyle={{
         color: "#FFFFFF",
         fontFamily: "OpenSansRegular",
       }}
       highlightDateNameStyle={{
         color: 
         "#FFFFFF",
         fontFamily: "OpenSansRegular",
       }}
       disabledDateNameStyle={{
         color: "#7A7A7A",
         fontFamily: "OpenSansRegular",
       }}
       disabledDateNumberStyle={{
         color: "#7A7A7A",
         fontFamily: "OpenSansRegular",
       }}
     
       scrollable={true}
       iconContainer={{ flex: 0.1}}
       // onDateSelected={selectDate}
      
     />
   </View>
<View style={{padding:8,margin:'1%'}}><Text style={{color:'#000',fontSize:15,fontWeight:'500'}}>
  All
</Text>
</View>



  <View style={{flex:1,height:'100%'}}>
   <FlatList
     data={DATA}
     renderItem={renderItem}
     keyExtractor={(item, index) => item.id.toString()}
    //  style={{ height: 500 }}
   />
   
   </View>
   </View>:null} 
   {up?<View style={{ flex:1,backgroundColor:'#FFFFF' }}>
     <View style={{   }}>
     <CalendarStrip
       selectedDate={new Date()}
     
       
       
       // showDayNumber={false}
       // showDayName={false}
       // showDate={false}
       // showMonth={true}
       // highlightColor={"red"}
       calendarAnimation={{ type: "sequence", duration: 30 }}
       daySelectionAnimation={{
         type: "background",
         duration: 200,
         highlightColor: "#5B36D4",
       }}
      
       style={{ height: 100, paddingTop: 20, paddingBottom: 10, }}
       calendarHeaderStyle={{
         color: "#7A7A7A",
         fontFamily: "OpenSansRegular",
         fontSize:20
       }}
      //  calendarColor={"#FFFFFF"}
       dateNumberStyle={{ color: "#7A7A7A", fontFamily: "OpenSansRegular", }}
       dateNameStyle={{ color: "#7A7A7A", fontFamily: "OpenSansRegular", }}
       highlightDateNumberStyle={{
         color: "#FFFFFF",
         fontFamily: "OpenSansRegular",
       }}
       highlightDateNameStyle={{
         color: 
         "#FFFFFF",
         fontFamily: "OpenSansRegular",
       }}
       disabledDateNameStyle={{
         color: "#7A7A7A",
         fontFamily: "OpenSansRegular",
       }}
       disabledDateNumberStyle={{
         color: "#7A7A7A",
         fontFamily: "OpenSansRegular",
       }}
     
       scrollable={true}
       iconContainer={{ flex: 0.1}}
       // onDateSelected={selectDate}
      
     />
   </View>
<View style={{padding:8,margin:'1%'}}><Text style={{color:'#000',fontSize:15,fontWeight:'500'}}>
  All
</Text>
</View>



  <View style={{flex:1}}>
   <FlatList
     data={DATA}
     renderItem={renderItem}
     keyExtractor={(item, index) => item.id.toString()}
     style={{ height: 500 }}
   />
   
   </View>
   </View>:null} 
   {past?<View style={{flex:1,backgroundColor:'#FFFFF' }}>
     <View style={{   }}>
     <CalendarStrip
       selectedDate={new Date()}
     
       
       
       // showDayNumber={false}
       // showDayName={false}
       // showDate={false}
       // showMonth={true}
       // highlightColor={"red"}
       calendarAnimation={{ type: "sequence", duration: 30 }}
       daySelectionAnimation={{
         type: "background",
         duration: 200,
         highlightColor: "#5B36D4",
       }}
      
       style={{ height: 100, paddingTop: 20, paddingBottom: 10, }}
       calendarHeaderStyle={{
         color: "#7A7A7A",
         fontFamily: "OpenSansRegular",
         fontSize:20
       }}
      //  calendarColor={"#FFFFFF"}
       dateNumberStyle={{ color: "#7A7A7A", fontFamily: "OpenSansRegular", }}
       dateNameStyle={{ color: "#7A7A7A", fontFamily: "OpenSansRegular", }}
       highlightDateNumberStyle={{
         color: "#FFFFFF",
         fontFamily: "OpenSansRegular",
       }}
       highlightDateNameStyle={{
         color: 
         "#FFFFFF",
         fontFamily: "OpenSansRegular",
       }}
       disabledDateNameStyle={{
         color: "#7A7A7A",
         fontFamily: "OpenSansRegular",
       }}
       disabledDateNumberStyle={{
         color: "#7A7A7A",
         fontFamily: "OpenSansRegular",
       }}
     
       scrollable={true}
       iconContainer={{ flex: 0.1}}
       // onDateSelected={selectDate}
      
     />
   </View>
<View style={{padding:8,margin:'1%'}}><Text style={{color:'#000',fontSize:15,fontWeight:'500'}}>
  All
</Text>
</View>



  <View style={{flex:1}}>
   <FlatList
     data={DATA}
     renderItem={renderItem}
     keyExtractor={(item, index) => item.id.toString()}
     style={{ height: 500 }}
   />
   
   </View>
   </View>:null} 
   {offer?<View style={{flex:1,backgroundColor:'#FFFFF', }}>
    



  <View style={{flex:1,paddingTop:"10%"}}>
  
   <FlatList
     data={newDATA}
     renderItem={renderItems}
     keyExtractor={(item, index) => item.id.toString()}
     style={{ height: 500 }}
   />
   
   </View>
   
   </View>:null} 
   
   </>

    
  )
  


}

export default ShiftScreen

const styles = StyleSheet.create({

  container: {
    flex: 0.25,
    backgroundColor: colors.purple
  },
  container1: {
    justifyContent: "flex-end",
    flexDirection: 'row',
    // alignItems:'center',
    paddingTop: '15%',
    // paddingRight:'4%'
  },
  container4:{
    flexDirection:"row",
    justifyContent: "center",
    // paddingLeft:15s

  },
  Management: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: "poppins",
    color: colors.backgroundBlack,
    justifyContent: "center"
  },
  Ring: {
    paddingLeft: '25%',
    paddingRight: '3%'

  },
  container3:{
    justifyContent:'center',
    alignItems:"center",
    

  },
  button:{
    fontSize:12,
    fontWeight:'400',
    color:colors.backgroundBlack


  },
  buttonDesign:{
    width:92,
    height:28,
    borderRadius:5,
    backgroundColor:"rgba(255, 255, 255, 0.56)",
    justifyContent:'center',
    alignItems:'center',
  


  },
  buttonDesign1:{
    width:92,
    height:28,
    borderRadius:5,
    backgroundColor:"rgba(255, 255, 255, 0.1)",
    justifyContent:'center',
    alignItems:'center',



    
  },
  buttonDesign5:{
    width:92,
    height:28,
    borderRadius:5,
    backgroundColor:"rgba(255, 255, 255, 0.56)",
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
   


  },
  buttonDesign6:{
    width:92,
    height:28,
    borderRadius:5,
    backgroundColor:"rgba(255, 255, 255, 0.1)",
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
  


    
  },
  
  buttonTab:{
    fontSize:14,
    fontWeight:"600",
    color:colors.backgroundBlack

  },
  buttonTab1:{
    fontSize:14,
    fontWeight:"600",
    color:"rgba(255, 255, 255, 0.1)",

  },
  container5:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginTop:'10%',
    paddingLeft:'5%',
    paddingRight:'5%'

  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
    margin: 15,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 25,
    // alignSelf:"center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 5,

    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button1: {
    width:138,
    height:40,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
    // paddingLeft: 3,
    marginLeft:10
    // elevation: 2,

    // marginBottom:20,
    // width:150,
    // backgroundColor:"red"
  },
  button2: {
    width:92,
    height:28,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
    paddingRight: 30,
    // elevation: 2,

    // marginBottom:20,
    // width:150,
    // backgroundColor:"red"
  },
  buttonClose: {
    backgroundColor: "#5B36D4",
  },
  buttonClose1: {
    backgroundColor: "rgba(91, 54, 212, 0.4)",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#000",

    fontFamily: "Nunito",
    fontSize:20,
    fontWeight:'500',
  },
  modalText1: {
    marginBottom: 15,
    textAlign: "center",
    color: "#7A7A7A",

    fontFamily: "Nunito",
    fontSize:12,
    fontWeight:'400',
  },
  textStyle2:{
fontSize:14,
fontWeight:'600',
color:'#FFF'
  },



})