import React from "react";
import { StyleSheet, View,  } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from "./LoginScreen";
import { CreateUserScreen } from "./CreateUserScreen";

const Stack = createStackNavigator();
const AuntNavigator = ({ navigation }) => {


   return (

    <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
 >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Crear Cuenta" component={CreateUserScreen} />
 </Stack.Navigator>

    
   )
}

export default AuntNavigator;

const styles = StyleSheet.create(
   {
      container: {
         flex: 1,
         backgroundColor: '#898F9C',
         width: '100%',
         height: '50%',
        
      }
   })
   