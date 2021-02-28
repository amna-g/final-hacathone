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

 


  

function Next(Props){

    return(
        <View>
            <Text style={{textAlign:'center',fontSize:23,marginTop:10}}> IT for every one</Text>
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbt6e_y1vMf4MR-DjuduvvQrYfyhyOjgG7aw&usqp=CAU'}}
        style={{width: 350, height: 200,resizeMode:'contain',marginTop:2}} />
 
 
   <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzgZp9n0VsPp1UseEJ15h6KdjYFRi14jiSg&usqp=CAU '}} 
        style={{width: 350, height: 200,resizeMode:'contain',marginTop:2}} />
   <TouchableOpacity onPress={()=>Props.navigation.navigate('Login')} title='click'>  
           <Text style={{textAlign:'center',fontSize:25,backgroundColor:'orange',clor:'white',marginTop:15}}  >REGISTER YOUR SELF</Text>
</TouchableOpacity>
   
   </View>
  

    )
}


export default Next;
 

