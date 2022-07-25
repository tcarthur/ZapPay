import * as Animatable from 'react-native-animatable';
import React, { useState, } from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Alert, } from 'react-native';

function LoginScreen(props) {
    const [logo] = useState(new Animated.ValueXY({ x: 277, y: 277 }));


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
                    source={require("./../assets/logoZap.png")}
                />
            </View>

            <Animatable.View
                delay={1000}
                animation="fadeInUp"

                style={[
                    style.container,
                ]}>
                <TextInput style={style.input}
                    placeholder="E-mail"
                    keyboardType="email-address"
                />
                <TextInput style={style.input}
                    autoCompleteType="password"
                    textContentType="password"
                    secureTextEntry

                />
                <TouchableOpacity style={style.btnAcessar}
                    onPress={() => handleSubmit()}
                >
                    <Text style={style.submitText}>ENTRAR</Text>
                </TouchableOpacity>
            </Animatable.View>
        </KeyboardAvoidingView>
    )
}
export default LoginScreen()

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
