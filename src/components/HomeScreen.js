import React from "react";
import { StyleSheet} from "react-native";
import { PostApi } from '../api/PostApi';
import { createStackNavigator } from '@react-navigation/stack';
import { ComentariosStack } from "./comentarios/ComentarioStack";
import AuntNavigator from "./Users/AuntNavigator";
/* import { PostApi } from './src/api/PostApi'; */


const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => {


   return (

      <Stack.Navigator
         initialRouteName="Aunt"
         screenOptions={{ headerShown: false }}
      >
          <Stack.Screen name="Aunt" component={AuntNavigator} /> 
         <Stack.Screen name="Post📃" component={PostApi} />
         <Stack.Screen name="comentar" component={ComentariosStack} />
      </Stack.Navigator>

   )
}

export default HomeScreen;

const styles = StyleSheet.create(
   {
      container: {
         flex: 1,
         /* alignContent: 'center',
         justifyContent: 'center',
         alignItems: 'center', */
         backgroundColor: '#898F9C',
         width: '100%',
         height: '50%',
         /* borderRadius: '15px', */
      }
   })
{/*   <SafeAreaView style={styles.container} >
      <View>
      <LoginScreen />
      <Text>login</Text>
      </View>
         <PostApi />
      </SafeAreaView> */}
      /*  <PostApi/> */