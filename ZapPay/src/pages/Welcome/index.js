import React, { useContext, useState } from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Alert, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../../context/AuthContext';

const SignIn = ({ }) => {
    const [logo] = useState(new Animated.ValueXY({ x: 277, y: 277 }));
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const { isLoading, login } = useContext(AuthContext);


    return (
        <KeyboardAvoidingView style={style.background}>
            <View style={style.containerLogo}>
                <Spinner visible={isLoading}/>
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

            <Animatable.View
                delay={1000}
                animation="fadeInUp"

                style={[
                    style.container,
                ]}>
                <TextInput style={style.input}
                    value={email}
                    placeholder="E-mail"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput style={style.input} TextInput
                    value={password}
                    placeholder="INSIRA A SENHA"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <TouchableOpacity style={style.btnAcessar}
                    onPress={() => { login(email, password) }}
                >
                    <Text style={style.submitText}>ENTRAR</Text>
                </TouchableOpacity>
            </Animatable.View>
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

export default SignIn;