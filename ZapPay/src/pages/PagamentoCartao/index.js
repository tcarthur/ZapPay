import { View, Text,StyleSheet,Image,TouchableOpacity,Modal, Alert} from 'react-native'
import React, { useState } from 'react'
import { useNavigation, } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Formulario from './formulario';
import ResumoDaCompra from './resumoDaCompra';



function HomeScreen() {
    return (
        <View style={{ flex: 1 ,}}>
            {/* FORMULARIO COM CARTÕES CADASTRADOS */}
                <ResumoDaCompra/>
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
                    <Text style={style.user}>DETALHES E PAGAMENTOS</Text>
                    
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
                    <tab.Screen name = "RESUMO DA COMPRA" component={HomeScreen}/>
                    <tab.Screen name = "CADASTRAR NOVO CARTÃO" component={CadastroScreen}/>
                </tab.Navigator>
            </View>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    div:{
        flex:6,
        flexDirection:'column',
        backgroundColor:'#fff',

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
        backgroundColor:'#fff',

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
        flexDirection: 'row-reverse',
        justifyContent:'space-between',
        paddingLeft: 30,
        paddingRight: 30
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