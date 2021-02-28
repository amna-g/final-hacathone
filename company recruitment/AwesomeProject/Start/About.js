

import React from 'react'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    FlatList

  
  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { TouchableOpacity } from 'react-native-gesture-handler';
  import { block } from 'react-native-reanimated';

 


  

function Home(Props){

    return(
        <View>
        <Image source={{uri: 'https://www.thebalancecareers.com/thmb/wi1aGGbAZ5lLHqPQO6TSlylZUtk=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/list-of-information-technology-it-skills-2062410-v2-5b7494d9c9e77c00575e7813.png  '}}
        style={{width: 350, height: 200,resizeMode:'contain',marginTop:2}} />
   <Text> THIS REQUIREMENT IS MANDATORY FOR APPLICANT</Text>
 
   <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDcI11KWqR94ynJulBgExAVs8yg2_DckYvQ&usqp=CAU '}} 
        style={{width: 350, height: 200,resizeMode:'contain',marginTop:2}} />
   <TouchableOpacity onPress={()=>Props.navigation.navigate('Detail')} title='click'>  
           <Text style={{textAlign:'center',fontSize:25,backgroundColor:'orange',clor:'white',marginTop:15}}  >skills you need</Text>
</TouchableOpacity>
   
   </View>
  

    )
}


export default Home;
 

