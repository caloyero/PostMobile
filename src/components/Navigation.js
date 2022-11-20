import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import { PerfilScreen } from "./PerfilScreen";
import NotificationScreen from "./NotificationScreen";
import { Comentarios } from "./Comentarios";
import { View } from "react-native";

const Tab = createBottomTabNavigator();


export function Navigation() {
    return (
        
        <Tab.Navigator
            initialRouteName="Home"
            inactiveColor="black"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: "#A4BE7B",
                },
                headerTintColor: "#fff",
                tabBarActiveTintColor: "#A4BE7B",
                tabBarInactiveTintColor: 'gray',

                //tabBarStyle: { position: 'absolute' },
                tabBarShowLabel: "false"
            }

            }
        >
            <Tab.Screen
                name="🏠 Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",

                    tabBarBadge: 0,
                }}
            />
            <Tab.Screen name="🧔🏻 Perfil" component={PerfilScreen} options={{
                tabBarLabel: "MyPerfil",

                tabBarBadge: 8,
            }} />
            <Tab.Screen name="🔔 Notification" component={NotificationScreen} options={{
                tabBarLabel: "Notification",

                tabBarBadge: 8,
            }} />
            {/*   <Tab.Screen name="comentarios" component={Comentarios}  options={{
                    tabBarLabel: "comentarios",
                  
                    tabBarBadge:8,
                }}/> */}
        </Tab.Navigator>
    );
}

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