import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import { PerfilScreen } from "./PerfilScreen";
import NotificationScreen from "./NotificationScreen";
import { Comentarios } from "./Comentarios";
import { View, Image, StyleSheet } from "react-native";
import { UserContext } from "./aunt/AuntUser";


const Tab = createBottomTabNavigator();


export function Navigation() {
    const { id } = useContext(UserContext)
    console.log(id)
    return (

        <Tab.Navigator
            initialRouteName="Home"
            inactiveColor="black"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? require('./utils/images/home.png')
                            : require('./utils/images/home.png');
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? require('./utils/images/usuario.png')
                            : require('./utils/images/usuario.png');
                    }
                    else if (route.name === 'Notification') {
                        iconName = focused ? require('./utils/images/campana-de-notificacion.png')
                            : require('./utils/images/campana-de-notificacion.png');
                    }

                    // You can return any component that you like here!
                    return <Image
                        source={iconName}
                        style={styles.IconNavigation}
                        resizeMode='contain'
                    />;
                },
                activeBackgroundColor: 'white',
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#6C4AB6', color: 'white' },


            })}
        >

            {id ? 
            (<>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: "Notification",

                tabBarBadge: 8,
            }} />
            <Tab.Screen name="Notification" component={NotificationScreen} options={{
                tabBarLabel: "Notification",

                tabBarBadge: 8,
            }} />
            <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarBadge: 0,
                    headerShown: false,
                }}
            />
            </>) 
            :(<Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: "Notification",

                tabBarBadge: 8,
            }} />)
              
            }


            {/*   <Tab.Screen name="comentarios" component={Comentarios}  options={{
                    tabBarLabel: "comentarios",
                  
                    tabBarBadge:8,
                }}/> */}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create(
    {

        IconNavigation: {
            with: 20,
            height: 20,

        }
    })

/* export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    );
} */

/* screenOptions={{
    tabBarActiveTintColor: "#",
    //tabBarStyle: { position: 'absolute' },
    tabBarShowLabel: "false"
} */

/* tabBarOptions={{
    activeTintColor: '#black',
    inactiveTintColor: 'lightgray',
    activeBackgroundColor: '#285430',
    inactiveBackgroundColor: '#5F8D4E',
    style: {
        backgroundColor: '#CE4418',
        paddingBottom: 3
    }
} */