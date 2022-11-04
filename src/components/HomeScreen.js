import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { Icon } from "@rneui/themed";
import {PostApi} from '../api/PostApi'
/* import { PostApi } from './src/api/PostApi'; */



 const HomeScreen =()=>{


    return(
         <View style ={styles.container} >
            <PostApi/>
        </View> 
       /*  <PostApi/> */
    )
}

export default HomeScreen;

const styles = StyleSheet.create(
   {
   container:{
       flex:1,
       /* alignContent: 'center',
       justifyContent: 'center',
       alignItems: 'center', */
       backgroundColor : '#898F9C',
       width: '100%',
       height: '50%',
       /* borderRadius: '15px', */
   }
})