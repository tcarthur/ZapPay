import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Alert, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function SignIn() {


    const [logo] = useState(new Animated.ValueXY({ x: 277, y: 277 }));
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [isLoading, setLoading] = useState(false)


    const entrar = () => {
            axios.post('https://62c87c2d0f32635590d96d8d.mockapi.io/apiCliente/v1/users', {
            email: email,
            password: password
        })
            .then(function (response) {
                setLoading(false)
                navigation.reset({
                    index: 0,
                    routes: [{ name: "DetalhesPedidos" }]
                })
            })
            .catch((error) => {
                setLoading(false)
                Alert, alert("Usuário ou senha inválido")
            })


    }




    const navigation = useNavigation();


    return (
        <KeyboardAvoidingView style={style.background}>
            <View style={style.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    delay={400}
                    style={{
                        width: logo.x,
                        height: logo.y,
                    }}
                    source={require("../../assets/logoZap.png")}
                />
            </View>
            {isLoading &&
                <Text>CARREGANDO...</Text>
            }

            {!isLoading &&
                <Animatable.View
                    delay={1000}
                    animation="fadeInUp"

                    style={[
                        style.container,
                    ]}>
                    <TextInput style={style.input}
                        placeholder="E-mail"
                        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        onChangeText={() => setEmail}
                        keyboardType="email-address"
                    />
                    <TextInput style={style.input} TextInput
                        placeholder="Sua senha"
                        leftIcon={{ type: 'font-awesome', name: 'lock' }}
                        oonChageText={() => setPassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={style.btnAcessar}
                        onPress={() => entrar()}
                    >
                        <Text style={style.submitText}>ENTRAR</Text>
                    </TouchableOpacity>
                </Animatable.View>
            }
        </KeyboardAvoidingView>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#069D07'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    input: {
        backgroundColor: '#fff',
        width: 525,
        height: 90,
        marginBottom: 25,
        color: '#222',
        fontSize: 24,
        borderRadius: 50,
        padding: 10,
        textAlign: 'center'
    },
    btnAcessar: {
        backgroundColor: '#FFE925',
        color: '#fff',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 25,
        marginBottom: 75
    },
    submitText: {
        color: '#fff',
        fontSize: 24,
    }

})
