import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { block } from 'react-native-reanimated';

function Home(Props){
    return(
<View > 
<Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrVaSSR_uUuC0PUYMqF98iEr1dg7L0oYQ5A&usqp=CAU'}} 
        style={{width: 350, height: 400,resizeMode:'contain',marginTop:2}} />
    <Text style={{color:'black',fontSize:20
}}> FOR APPLICANT REGISTERATION</Text>

<TouchableOpacity onPress={()=>Props.navigation.navigate('Login')} title="click here">
         <Text style={{textAlign:'center',fontSize:33,backgroundColor:'orange',color:'black',marginTop:20}}> REGISTERATION FORM</Text></TouchableOpacity>

    {/* <Text style={{color:'black',fontSize:23,marginTop:10}}> CHECK OUR REQUIREMENT OF HIRING CANDIDATES</Text>
     <TouchableOpacity onPress={()=>Props.navigation.navigate('About')} title="click here">
         <Text style={{textAlign:'center',fontSize:33,backgroundColor:'orange',clor:'white',marginTop:20}}> click </Text></TouchableOpacity> */}
</View>
    )
}


export default Home;