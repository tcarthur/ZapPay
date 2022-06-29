import { View, Text,StyleSheet,Image,TouchableOpacity,TextInput,Button} from 'react-native'
import React, { useState } from 'react'
import { useNavigation, } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Formulario from './formulario';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* FORMULARIO COM CARTÕES CADASTRADOS */}
        </View>
    );
}

function CadastroScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Formulario/>
        </View>
    )
}



export default function Consulta() {

const navigation = useNavigation(); 
const tab = createMaterialTopTabNavigator();



return (
    <View style={style.container}>
        <View style={style.div}>
            <View style={style.topBar}>
                    <Image source={require("../../assets/logoZap.png")} 
                    style={{
                    width: 64,
                    height: 64,
                    }}>
                    </Image>
                    <Text style={style.user}>SELECIONAR CARTÃO</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
                        <Image source={require("../../assets/exit.png")} 
                        onPress={()=>navigation.navigate('Welcome')}
                        style={{
                        width: 40,
                        height:46,
                        }}>
                        </Image>
                    </TouchableOpacity>
            </View> 

                        {/* INICIO PARTE CENTRAL DA TELA */}
            <View style={style.central}>
                <tab.Navigator>
                    <tab.Screen name = "CARTÕES" component={HomeScreen}/>
                    <tab.Screen name = "CADASTRO CARTÃO" component={CadastroScreen}/>
                </tab.Navigator>
            </View>
                                            {/* BOTOES AVANCAR E VOLTAR */}
            <View style={style.containerBtn}>
                {/* <TouchableOpacity
                onPress={() => navigation.navigate('SelecionarPagamento')}
                >
                    <Text style ={style.btnVoltar}>VOLTAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('SelecionarPagamento')}
                >
                    <Text style ={style.btnPagar}>PAGAR</Text>
                </TouchableOpacity> */}
            </View> 
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    div:{
        flex:6,
        flexDirection:'column'
    },
    topBar:{
        flexDirection: "row",
        backgroundColor: '#069D07',
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        },
    user:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        },
    central:{
        felx:1,
        justifyContent:'center',
        height:'85%',
    },
    novoCartao:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputNome:{
        backgroundColor: '#fff',
        width: '100%',
        height:60,
        marginBottom: 25,
        color: '#222',
        fontSize: 24,
        borderRadius: 50,
        padding: 10,
        textAlign: 'center',
    },
    inputNumeroCartao:{
        backgroundColor: '#fff',
        width: '100%',
        height:60,
        marginBottom: 25,
        color: '#222',
        fontSize: 24,
        borderRadius: 50,
        padding: 10,
        textAlign: 'center',
    },
    inputValidade:{
        backgroundColor: '#fff',
        width: '40%',
        height:60,
        marginBottom: 25,
        color: '#222',
        fontSize: 24,
        borderRadius: 50,
        padding: 10,
        textAlign: 'center',
    },
    inputCV:{
        backgroundColor: '#fff',
        width: '35%',
        height:60,
        marginBottom: 25,
        color: '#222',
        fontSize: 24,
        borderRadius: 50,
        padding: 10,
        textAlign: 'center',
    },
    btnSalvar:{
        backgroundColor:'#069D07',
        color: '#fff',
        fontSize:24,
        fontWeight:'bold',
        borderRadius: 50,
        padding: 25,
        width:270,
        textAlign:'center'
    },
    cartaoExistente:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    cartaoCadastrado:{
        fontSize:25,
        marginTop:20,
        
    },
    containerBtn:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft: 30,
        paddingRight: 30
    },
    btnVoltar:{
        backgroundColor:'red',
        color: '#fff',
        fontSize:24,
        fontWeight:'bold',
        borderRadius: 50,
        padding: 25,
        width:270,
        textAlign: 'center',
    },
    btnPagar:{
        backgroundColor:'#069D07',
        color: '#fff',
        fontSize:24,
        fontWeight:'bold',
        borderRadius: 50,
        padding: 25,
        width:270,
        textAlign: 'center',
    },
})