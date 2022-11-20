/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigation } from './src/components/Navigation';
import PostApi from './src/api/PostApi';

const App = () => {


  return (
    
     
      <NavigationContainer>
      <View
         style={styles.containerLogo}
      >
      <StatusBar
        animated={true}
        backgroundColor="#6C4AB6"
       />
       <Image
       style={styles.logo}
        source={require('./src/utils/images/logo.png')}
       />
      </View>
        <Navigation />
      </NavigationContainer>
    


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  containerLogo:{
    backgroundColor: '#6C4AB6',
    height: 50,
  },
  logo:{
    width: 120,
    height: 30,
    marginTop: 12,
    marginLeft: 5,
  }
});

export default App;
