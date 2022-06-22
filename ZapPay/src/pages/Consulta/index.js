import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Divider } from 'react-native-paper';


export default function Consulta() {

const navigation = useNavigation();

return (
    <View style={style.container}>
        <View style={style.topBar}>
                <Image source={require("../../assets/logoZap.png")} 
                style={{
                width: 64,
                height: 64,
                }}>
                </Image>
                <Text style={style.user}>RESUMO DO PEDIDO</Text>
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
            
        <View style={style.tabelaProdutos}>
            <View>
                <View>
                    <Text style={{fontSize: 25, margin: 20}}> PEDIDO: 987785</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style= {{fontSize: 30, margin: 20}}> 27001515 - Cartão Loja Cliente 1</Text>
                        <Text style= {{fontSize: 30, margin: 20}}> 1 unid.</Text>
                        <Text style= {{fontSize: 30, margin: 20}}> R$300,00</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontSize: 25, margin: 20}}> PEDIDO: 987785</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style= {{fontSize: 30, margin: 20}}> 27001515 - Cartão Loja Cliente 1</Text>
                        <Text style= {{fontSize: 30, margin: 20}}> 1 unid.</Text>
                        <Text style= {{fontSize: 30, margin: 20}}> R$300,00</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={style.containerBtn}>
            <TouchableOpacity
            onPress={() => navigation.navigate('SingIn')}
            >
                <Text style ={style.btnVoltar}>VOLTAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('SelecionarPagamento')}
            >
                <Text style ={style.btnPagar}>AVANÇAR</Text>
            </TouchableOpacity>
        </View> 
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    topBar:{
        backgroundColor: '#069D07',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        },
    user:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        },
    tabelaProdutos:{
        width:'80%',
        height: '85%',
        padding:20
    },
    containerBtn:{
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