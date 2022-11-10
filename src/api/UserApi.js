
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Button, Image, ImageBackground, } from "react-native";
export const UserApi = () => {
    const [userId, setUserId] = useState(2)
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
    const postFromUserUrl = 'http://10.0.2.2:3000/api/post/perfil/' + userId;
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

    const countLikes = () => {
        /*   count = post.likes + 1;
          post.likes = count; */
    }

    return (

        <View>
            <FlatList
                data={user}
                renderItem={
                    ({ item }) =>
                        <View>
                            <View style={styles.containerUser} >
                                <ImageBackground style={styles.coverPhoto}
                                    source={{ uri: item.foto_de_portada }}
                                ><Image
                                        style={styles.imagePerfil}
                                        source={{ uri: item.foto_de_perfil }}
                                    />
                                </ImageBackground>
                                <Text style={styles.namePerfil}  >{item.nombre}</Text>
                                <View style={styles.info}>
                                    <Text style={styles.namePerfil}>INFO</Text>
                                    <Text style={styles.contentInfo}  >{item.nombre}</Text>
                                    <Text style={styles.contentInfo}>{item.apellido}</Text>
                                    <Text style={styles.contentInfo}>{item.edad}</Text>
                                    <Text style={styles.contentInfo}>{item.titulo}</Text>
                                </View>
                            </View>
                        </View>
                }
            />
            <View>
                <Text>erere</Text>
            </View>
            <FlatList
                data={userPost}
                renderItem={
                    ({ item }) =>
                        <View style={styles.container}>

                            <View style={styles.userInfo}>
                                <Image
                                    style={styles.imagePerfilPost}
                                    source={{ uri: item.foto_de_perfil }}
                                /><Text style={styles.userName}> {item.nombre}</Text>
                            </View>
                            <Image
                                style={styles.imagePost}
                                source={{ uri: item.imagen }}
                            />

                            <Text style={styles.title}> {item.titulo}</Text>
                            <Text style={styles.content}>{item.contenido}</Text>
                            <View style={styles.actions}>
                                <Text>👍 {item.likes} </Text>
                                <Text>4 Comentarios</Text>
                            </View>
                            <View style={styles.actions}>
                                <Button
                                    color='white'
                                    title="👍 Likes"
                                    onPress={countLikes()}
                                />
                                <Text>💬 Comentar</Text>
                                <Text> ✈️ Compartir</Text>
                            </View>
                        </View>} />
        </View>


        /*  <ScrollView>
             {user.map((element) => (
                 
 
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
  */

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
            borderTopWidth: 0.5,
            borderColor: 'gray'

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
            backgroundColor: '#E4E5E6'
        },
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            width: '100%',
            height: '50%',
            marginBottom: '1%',
            marginTop: '1%',
            paddingTop: 20,
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

        },
        userInfo: {
            flexDirection: 'row'
        },
        userName: {
            fontSize: 18,
            color: 'black',
            marginTop: 14,
        },
        imagePerfilPost: {
            width: 50,
            height: 50,
            borderWidth: 3,
            borderColor: 'white',
            borderRadius: 65,
            padding: 5,
            marginLeft: 20,
            marginTop: 7,
        },
        imagePost: {
            width: '100%',
            height: 300

        }
    })
