import React from "react";
import { View, Text, Image, TextInput, StyleSheet, Button, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Formik } from 'formik';

export const CreateUserScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <Image
                style={styles.Logo}
                source={require('../Users/logo.png')}
                //source={{ uri: 'https://leman.ie/wp-content/uploads/2018/12/An-Post-Logo-Current.jpg' }}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
                <Text>😁</Text>
            </TouchableOpacity>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
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
                        <View style={styles.creacCuenta}>
                            <Text
                                style={styles.creacCuentaText}
                            >Crear Cuenta</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            //autoFocus={true}
                            onBlur={handleBlur('email')}
                            value={values.comentario}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            //autoFocus={true}
                            onBlur={handleBlur('password')}
                            value={values.comentario}
                        />
                        {/*  <Button
                            onPress={handleSubmit}
                            title="Login"
                            color="#E5D9B6"
                            style={styles.buttom}
                        /> */}
                        <Pressable style={styles.buttom} onPress={handleSubmit}>
                            <Text style={styles.textButtom}>Crear cuenta</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
        </View>
    )

}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#6C4AB6',
            width: '100%',
            height: '50%',
            marginBottom: '1%',
            marginTop: '1%',
            elevation: 3,
            borderRadius: 5,
            shadowColor: '#333',
            shadowOpacity: 0.3,
            shadowOffset: { width: 1, height: 1 },
            //marginHorizontal: 18,

        },
        Logo: {
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: 200,
            height: 70,
            /*  marginLeft: 130,
             marginTop: 10, */
        },
        input: {
            width: 290,
            height: 40,
            // marginLeft: 55,
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 1,
            padding: 10,
            textAlign: 'center',
            alignItems: "center",
            backgroundColor: 'white',
            borderRadius: 12,
        },
        buttom: {
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            alignContent: 'center',
            backgroundColor: '#8D9EFF',
            color: 'white',
            borderRadius: 4,

        },
        textButtom: {
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 26,
            color: 'white',
        },
        creacCuenta: {
            alignItems: 'center',
            margin: 10
        },
        creacCuentaText: {
            color: 'white',
            fontSize: 20,
        }
    })

