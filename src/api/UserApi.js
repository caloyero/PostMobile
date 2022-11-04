
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView, Image, ImageBackground, } from "react-native";
export const UserApi = () => {
    const [userId, setUserId] = useState(1)
    const [user, setUser] = useState([]);
    const userUrl = 'http://10.0.2.2:3000/api/user/' + userId;
    const fetchData = () => {
        fetch(userUrl)
            .then(response => response.json())
            .then((data) => {
                setUser(data);
            })
            .catch(error => console.log(error))
    }

    const [userPost, setUserPost] = useState([])
    const postFromUserUrl = 'http://10.0.2.2:3000/api/postFromUserId/'+ userId;
    const postFromUser = () => {
        fetch(postFromUserUrl)
            .then(response => response.json())
            .then((dataPost) => {
                setUserPost(dataPost);
            })
            .catch(error => console.log(error))
    }



    useEffect(() => {
        fetchData()
        postFromUser()
    }, [])

    return (


        <ScrollView>
            {user.map((element) => (
                <View style={styles.containerUser} >
                    <ImageBackground style={styles.coverPhoto}
                        source={{ uri: 'https://media.istockphoto.com/id/1428484776/es/foto/toque-final-de-chefs.jpg?s=1024x1024&w=is&k=20&c=gudAefJnwga3_YBUWfmK4yj9TCLrK-JfFTQuJZKK6h8=' }}
                    ><Image
                            style={styles.imagePerfil}
                            source={{ uri: 'https://media.istockphoto.com/id/1089109548/es/foto/las-mujeres-que-disfrutan-en-caf%C3%A9.jpg?s=1024x1024&w=is&k=20&c=Niyqg9E4hce2NXym7N796n-BVWtpusAlyYe7khLcemQ=' }}
                        />

                    </ImageBackground>

                    <Text style={styles.namePerfil} key={element.id}  >{element.nombre}</Text>
                    <View style={styles.info}>
                        <Text style={styles.namePerfil}>INFO</Text>
                        <Text style={styles.contentInfo} key={element.id}  >{element.nombre}</Text>
                        <Text style={styles.contentInfo}>{element.apellido}</Text>
                        <Text style={styles.contentInfo}>{element.edad}</Text>
                    </View>
                </View>

            ))}
            
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


    );


}
const styles = StyleSheet.create(
    {
        containerUser: {
            flex: 1,
            backgroundColor: '#ffffff',
            width: '100%',
            height: '50%',
            marginBottom: '1%',
            marginTop: '1%',
            elevation: 3,
            borderRadius: 5,
            shadowColor: '#333',
            shadowOpacity: 0.3,
            shadowOffset: { width: 1, height: 1 },


        },
        namePerfil: {
            fontSize: 18,
            marginTop: 28,
            fontWeight: 'bold',
            marginBottom: 3,
            color: 'black',
            marginHorizontal: 30

        },
        contentInfo: {
            textAlign: 'left',
            fontSize: 15,
            paddingTop: 4,
            paddingBottom: 4,
            marginLeft: 30,

        },
        info: {
            borderTopWidth: 1,

        },
        imagePerfil: {
            width: 130,
            height: 130,
            borderWidth: 3,
            borderColor: 'white',
            borderRadius: 65,
            padding: 5,
            marginLeft: 20,
            marginTop: 65,
        }
        , coverPhoto: {
            width: '100%',
            height: 168,
            backgroundColor: 'red'
        },
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            width: '100%',
            height: '50%',
            marginBottom: '1%',
            marginTop: '1%',
            elevation: 3,
            borderRadius: 5,
            shadowColor: '#333',
            shadowOpacity: 0.3,
            shadowOffset: { width: 1, height: 1 },
           

        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 3,
            color: 'black',
            marginHorizontal: 10

        },
        content: {
            textAlign: 'center',
            fontSize: 15,
            paddingTop: 45,
            paddingBottom: 40,
        },
        actions: {
            flexDirection: 'row',

            justifyContent: 'space-evenly',
            borderTopWidth: 1,

        }
    })
