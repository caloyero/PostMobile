import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Formik } from 'formik';
import Form from 'react-native-form';
import { TouchableOpacity } from "react-native-gesture-handler";


export const ComentariosStack = ({navigation}) => {

  const [usuariosId, setUsuarisId] = useState(1)
  const [postId, setPostId] = useState(1)

  return (
    <Formik
      initialValues={{
        comentario: '',
        usuarios_id: usuariosId,
        post_id: postId,
      }}
      onSubmit={async (values, actions) => {
        actions.resetForm();
        console.log(values)
        await fetch("http://10.0.2.2:4000/api/comentarios", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((values) => {
            console.log('Success:', values);
          })
          .catch((error) => {
            console.error('Error:', error);
          })
      }

      }

    >
    
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.containerComentario}>
        <TouchableOpacity
                onPress={() => navigation.navigate('Post📃')}
            >
                <Text>🔙</Text>
            </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Comentario"
            onChangeText={handleChange('comentario')}
            autoFocus={true}
            onBlur={handleBlur('comentario')}
            value={values.comentario}
          />
          {/* <Button title="Comentar" /> */}
          <TouchableOpacity onPress={handleSubmit}
            style={styles.touchOpacity}

          >
            <Text style={styles.bottom}>📌</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>

  )

}

const styles = StyleSheet.create({
  containerComentario: {
    flexDirection: 'column',
    alignContent: "center",
  },

  input: {
    width: 290,
    height: 40,
    marginLeft: 55,
    marginTop: 100,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    alignItems: "center",
    borderRadius: 10,
  },
  touchOpacity: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  bottom: {
    width: 50,
    height: 50,
    fontSize: 30,
    /*  backgroundColor: "#fff" */
  }
});