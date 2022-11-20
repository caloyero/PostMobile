import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, Button, FlatList, TouchableHighlight, Pressable, Modal, TouchableWithoutFeedback, Keyboard, TouchableOpacity, } from "react-native";
import 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
//import { Comentarios } from "../components/Comentarios";
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigation } from "../components/comentarios/ComentarioStack";
import { PruebaScreen } from "../components/comentarios/ComentarioStack";
import { ComentariosStack } from "../components/comentarios/ComentarioStack";
import { Navigation } from "../components/Navigation";
import { useLinkProps } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


export const PostApi = ({ navigation }) => {
    const [post, setPost] = useState([]);
    const [likes, setLikes] = useState(0)
    const [id, setId] = useState(0)
    const postUrl = 'http://10.0.2.2:3000/api/post';
    const [comentarios, setComentarios] = useState([]);
    const [fotoDePerfil, setFotoDePerfil] = useState([]);
    const fetchData = () => {
        fetch(postUrl)
            .then(response => response.json())
            .then((data) => {
                setPost(data);
            })
            .catch(error => console.log(error))
    }

    const [comentarioId, setComentarioId] = useState(1);
    const comentariosUrl = 'http://10.0.2.2:3000/api/comentariosFromPostId/' + id;
    const fetchDataComentarios = () => {
        fetch(comentariosUrl)
            .then(response => response.json())
            .then((dataComentario) => {
                setComentarios(dataComentario);
            })/* .then(console.log(comentarios)) */
            .catch(error => console.log(error))
    }

    const fotoDePerfilUrl = 'http://10.0.2.2:3000/api/userPerfil/' + id;

    const fetchFotoDeUsuario = () => {
        fetch(fotoDePerfilUrl)
            .then(response => response.json())
            .then((datafotoDePerfil) => {
                setFotoDePerfil(datafotoDePerfil);
                console.log(fotoDePerfil.foto_de_perfil)
            })
    }

    useEffect(() => {
        fetchData()
        fetchDataComentarios()
    }, [

    ])

    const comentario = (dato) => {
        if (result.post_id) {

        }
    }

    const renderPost = ({ item }) => {
        <View style={styles.container}>
            <Text>Api</Text>
            <Text>{item.titulo}</Text>
            <Text>{item.contenido}</Text>
        </View>
    }
    const countLikes = () => {
        count = post.likes + 1;
        post.likes = count;
    }

    const Login = () => {
        navigation.push("Login")
    }
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);
    const [modalVisible, setModalVisible] = useState(false);
    const Stack = createStackNavigator();

    /*  setLikes(post.likes) */
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity style = {styles.loginScreen}
                    onPress={() => navigation.navigate('Aunt')}
                >
                    <Text  style = {styles.loginScreen}>😁</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={post}
                renderItem={
                    ({ item }) =>
                        <View style={styles.container}>

                            <View style={styles.userInfo}>
                                <Image
                                    style={styles.imagePerfil}
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
                                <Text>👍 {(item.likes + count)} </Text>
                                <Text>4 Comentarios</Text>
                            </View>
                            <View style={styles.actions}>
                                <TouchableOpacity
                                    onPress={onPress}
                                >
                                    <Text>👍</Text>
                                </TouchableOpacity>

                                {/*  <TouchableHighlight onPress={onPress}>
                                <View >
                                    <Text>👍</Text>
                                </View>
                            </TouchableHighlight> */}

                                {/*  <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Modal has been closed.");
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => setModalVisible(!modalVisible)}
                                            >
                                                <Text style={styles.textStyle}>x</Text>
                                            </Pressable>
                                            <Comentarios />
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </Modal>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => setModalVisible(true)}
                            >
                                <Text style={styles.textStyle}>Comentar</Text>
                            </Pressable> */}

                                {/*  <View>
                                <Button title="💬 Comentar" onPress={() => this.RBSheet.open()} />
                                <RBSheet
                                    ref={ref => {
                                        this.RBSheet = ref;
                                    }}
                                    height={500}
                                    //openDuration={250}
                                    customStyles={{
                                        container: {
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }

                                    }}
                                >
                                    <Comentarios />
                                </RBSheet>
                            </View> */}
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("comentar")
                                    }}
                                >
                                    <Text>💬 Comentar</Text>
                                </TouchableOpacity>

                                <Text> ✈️ Compartir</Text>

                            </View>

                        </View>} />
        </SafeAreaView>



        /*  <ScrollView>
             {post.map((element) => (
                 <View style={styles.container} >
                     {fotoDePerfil.map((perfil) => (
                         <Image
                             style={styles.imagePerfil}
                             source={{ uri: perfil.foto_de_perfil + element.id }}
                         />
                     ))}
 
                     <Text style={styles.title} key={element.id}  >{element.titulo}</Text>
                     <Text style={styles.content}>{element.contenido}</Text>
                     {comentarios.map((result) => (
 
                         <View  >
                             <Text key={result.id}  >{result.comentario}</Text>
                             <Text style={styles.title} key={result.id}  >{result.post_id}</Text>
                         </View>
                     ))}
                     <View style={styles.actions}>
                         <Text>👍{element.likes} </Text>
                         <Text>4 Comentarios</Text>
 
                     </View>
                     <View style={styles.actions}>
                         <Button
                             title="👍 Likes"
                             onPress={countLikes()}
                         />
                         <Text>💬 Comentar</Text>
                         <Text> ✈️ Compartir</Text>
                     </View>
                 </View>
             ))}
 
         </ScrollView>
  */
    );


};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            width: '90%',
            height: '50%',
            marginBottom: '1%',
            marginTop: '1%',
            elevation: 3,
            borderRadius: 5,
            shadowColor: '#333',
            shadowOpacity: 0.3,
            shadowOffset: { width: 1, height: 1 },
            marginHorizontal: 18,
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
            paddingTop: 10,
            paddingBottom: 10,
            borderTopWidth: 0.5,
            borderColor: 'gray'
        },
        imagePerfil: {
            width: 50,
            height: 50,
            borderWidth: 3,
            borderColor: 'white',
            borderRadius: 65,
            padding: 5,
            marginLeft: 20,
            marginTop: 7,
        },
        boton: {
            backgroundColor: 'white',
        },
        userInfo: {
            flexDirection: 'row'
        },
        userName: {
            fontSize: 18,
            color: 'black',
            marginTop: 14,
        },
        imagePost: {
            width: '100%',
            height: 250

        }, centeredView: {
            flex: 1,

            justifyContent: "center",
            alignItems: "center",
            marginTop: 160
        },
        modalView: {
            margin: 20,
            height: 300,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        button: {
            borderRadius: 1,
            padding: 10,
            elevation: 2
        },
        buttonOpen: {
            backgroundColor: "white",
        },
        buttonClose: {
            backgroundColor: "white",
        },
        textStyle: {
            color: "gray",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        },loginScreen:{
            width: 50,
            height:50,
            fontSize:  30,
        }
    })


