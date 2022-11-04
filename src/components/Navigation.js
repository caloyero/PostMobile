import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import { PerfilScreen } from "./PerfilScreen";
import NotificationScreen from "./NotificationScreen";
const Tab = createBottomTabNavigator();

export function Navigation() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "blue"
            }}
        >
            <Tab.Screen
                name="🏠 Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                  
                    tabBarBadge:0,
                }}
            />
            <Tab.Screen name="🧔🏻 Perfil" component={PerfilScreen}  options={{
                    tabBarLabel: "MyPerfil",
                  
                    tabBarBadge:8,
                }}/>
            <Tab.Screen name="🔔 Notification" component={NotificationScreen}  options={{
                    tabBarLabel: "Notification",
                  
                    tabBarBadge:8,
                }}/>
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