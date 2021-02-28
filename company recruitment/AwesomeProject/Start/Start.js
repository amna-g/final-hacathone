import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ImageBackground } from 'react-native'

function Start(Props){
    return (
      <>
<Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQF9d1AqKn3cF--lxSU3IKRtNP-kgeijOwg&usqp=CAU'}} 
        style={{width: 350, height: 350,resizeMode:'contain',marginTop:2}} />
      {/* <Button onPress={()=>Props.navigation.navigate('Home')} title="start app"></Button> */}
  <Text style={{color:'black',fontSize:23,marginTop:10}}> CHECK OUR REQUIREMENT OF HIRING CANDIDATES</Text>
     <TouchableOpacity onPress={()=>Props.navigation.navigate('About')} title="click here">
         <Text style={{textAlign:'center',fontSize:33,backgroundColor:'orange',clor:'white',marginTop:30}}> click </Text></TouchableOpacity>
      
      </>
    );
  };

  const style= StyleSheet.create({
      Button :{
          marginBottom: 10,

      }
  })
     
  export default Start;