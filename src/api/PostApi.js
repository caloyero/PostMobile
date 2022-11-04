import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView, Card, } from "react-native";


export const PostApi = () => {
    const [post, setPost] = useState([]);
    /* const [loauding, setLoauding] = useState(false); */
    const postUrl = 'http://10.0.2.2:3000/api/post';
    /* const fetchData = async ()=>{
       const response = await fetch(postUrl)
       const data = await response.json();
       setPost(data);
       alert(post);
   }  */

    const fetchData = () => {
        fetch(postUrl)
            .then(response => response.json())
            .then((data) => {
                setPost(data);
            })
            .catch(error => console.log(error))
    }



    useEffect(() => {
        fetchData()
    }, [])


    const renderPost = ({ item }) => {
        <View style={styles.container}>
            <Text>Api</Text>
            <Text>{item.titulo}</Text>
            <Text>{item.contenido}</Text>
        </View>
    }
    /* console.log(renderPost) */
    return (
        /*   <FlatList
          data={post}
          renderItem={renderPost} keyExtractor={item=> item.id}/>  */

        <ScrollView>
            {post.map((element) => (
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


};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            /* alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center', */

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
            borderTopWidth: 1,

        }
    })

{/* <View style ={styles.container} >
        <Text>titulo</Text>
             <Text>{titulo}</Text>
            <Text>{contenido}</Text>
        </View> */}
