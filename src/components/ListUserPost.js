import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView, Image, ImageBackground, } from "react-native";

export const ListUserPost = () => {
    const [userId, setUserId] = useState(6)
    const [userPost, setUserPost] = useState([])
    const postFromUserUrl = 'http://10.0.2.2:4000/postFromUserId/' + userId;
    const postFromUser = () => {
        fetch(postFromUserUrl)
            .then(response => response.json())
            .then((dataPost) => {
                setUserPost(dataPost);
            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        postFromUser()
    }, [])

    return (
        <ScrollView>
            {userPost.map((element) => (
                <View style={styles.container} >

                    <Text style={styles.title} key={element.id}  >{element.titulo}</Text>
                    <Text style={styles.content}>{element.contenido}</Text>
                    <View style={styles.actions}>
                        <Text>👍 Likes</Text>
                        <Text>💬 Comentar</Text>
                        <Text> ✈️ Compartir</Text>
                    </View>
                </View>
            ))}
        </ScrollView>

    )


}
