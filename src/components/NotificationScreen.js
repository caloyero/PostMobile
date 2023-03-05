import React from "react";
import { View,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";




 const NotificationScreen =(navigation)=>{


    return(
        <View>
            <Text>Notificationes</Text>

            <TouchableOpacity //style = {styles.loginScreen}
                    onPress={() =>  navigation.navigate('Aunt') }
                >
                    <Text  //style = {styles.loginScreen}
                    >😁</Text>
                </TouchableOpacity>
        </View>

    )
}

export default NotificationScreen;