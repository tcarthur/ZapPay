import { View, Text,StyleSheet,Image,TouchableOpacity, ScrollView } from 'react-native'
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
            <ScrollView>
            {/* PRODUTO 1 */}
                <View>
                    <View style ={{flexDirection:'row',flexWrap:'nowrap', justifyContent:'center',alignItems:'center',}}>
                        <View>
                            <Image style={{maxWidth:300, maxHeight:200}} source={require('../../image/card-back.png')}/>
                        </View>
                        <View style={{flexDirection: 'column',height:250,marginLeft:25,}}>
                            <Text style= {{fontSize: 40, fontWeight:'bold',marginBottom:20}}> PEDIDO: 766969</Text>
                            <Text style= {{fontSize: 30, fontWeight:'bold',marginBottom:20}}> 27001515 - Cartão Loja Cliente 1</Text>
                            <Text style= {{fontSize: 30, fontWeight:'bold',marginBottom:20}}> 1 unid.</Text>
                            <Text style= {{fontSize: 30, fontWeight:'bold',marginBottom:20}}> R$300,00</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

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
        justifyContent: 'center',
        alignContent: 'center',
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
        alignSelf:'center',
        alignContent:'space-between',
        width:'95%',
        height: '85%',
        paddingTop:40
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