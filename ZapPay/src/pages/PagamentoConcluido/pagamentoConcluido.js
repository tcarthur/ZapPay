import { View, Text,StyleSheet,TouchableOpacity,Image, Animated } from 'react-native'
import React, {useState}  from 'react';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';


export default function Consulta() {


const [concluido] = useState(new Animated.ValueXY({x:300,y: 300}));

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
                <Text style={style.user}>PAGAMENTO CONCLUÍDO</Text>
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
            
        <View style={style.centroDaTela}>
            <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            >
                <Text  style={style.concluidoText}> COMPRA CONCLUIDA COM SUCESSO </Text>
            </Animatable.View>
            <Animatable.Image
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={{
                width: concluido.x,
                height: concluido.y,
            }}
                source={require('../../image/finalCompra.png')}
            />

        </View>

        <View style={style.containerBtn}>
            <TouchableOpacity
            onPress={() => navigation.navigate('SelecionarPagamento')}
            >
                <Text style ={style.btnPagar}>INÍCIO</Text>
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
        centroDaTela:{
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            height: '85%',
            paddingTop:40
        },
        concluidoText:{
            marginVertical:60,
            fontSize: 32,
            fontWeight: 'bold',
            color: '#000',
            },
    containerBtn:{
        flexDirection: 'row-reverse',
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