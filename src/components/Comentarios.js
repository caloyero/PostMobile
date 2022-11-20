import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Formik } from 'formik';
import Form from 'react-native-form';


export const Comentarios = () => {

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
        await fetch("http://10.0.2.2:3000/api/comentarios", {
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
        <View>
          <TextInput
            style={styles.input}
            placeholder="Comentario"
            onChangeText={handleChange('comentario')}
            autoFocus={true}
            onBlur={handleBlur('comentario')}
            value={values.comentario}
          />
          <Button onPress={handleSubmit} title="Comentar" />
        </View>
      )}
    </Formik>

  )

}

const styles = StyleSheet.create({
  input: {
    width: 290,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});