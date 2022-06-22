import React, {useState, useEffect}  from 'react';
import{ View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function PagamentoPix() {
const [logo] = useState(new Animated.ValueXY({x:277,y: 277}));
const navigation = useNavigation();

return (
<View>
    <View style={style.topBar}>
        <Image source={require("../../assets/logoZap.png")} 
        style={{
            width: 64,
            height: 64,
        }}>
        </Image>
        <Text style={style.user}>PAGAMENTO PIX</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
        <Image source={require("../../assets/exit.png")} 
        style={{
            width: 40,
            height: 46,
        }}>
        </Image>
        </TouchableOpacity>
    </View> 
    
    <View style = {style.containerPix}>
        <View>
            <View style = {{ flexDirection:'row', paddingTop: 15, alignItems: 'baseline'}}>
                <Text style={style.infoPix}>PEDIDO:</Text>
                <Text style={style.infoPixRecebida}>987785</Text>
            </View>
            <View style = {{ flexDirection:'row', paddingTop: 15, alignItems: 'baseline'}}>
                <Text style={style.infoPix}>VALOR:</Text>
                <Text style={style.infoPixRecebida}>R$318,00</Text>
            </View>
            <View style = {{ flexDirection:'row', paddingTop: 15, alignItems: 'baseline'}}>
                <Text style={style.infoPix}>CÓDIGO PIX VÁLIDO ATÉ DIA:</Text>
                <Text style={style.infoPixRecebida}>30/05/2022</Text>
            </View>
            <View style = {{ flexDirection:'column', paddingTop: 15, alignItems: 'baseline'}}>
                <Text style={style.infoPix}>PIX COPIA E COLA:</Text>
                <View>
                    <Text  style={style.containerPixCopiaECola}>ASKLASN oNOSNS0 AS20D4 5604D980 56ED LKASOPD U091 23&&%% APISD IDQ´WENWQÉC NCDNSC 
                        SDUHCPWQE R65898908915F231+C DFCJIANSD QWEIW EPEJQWOEQWEJQW EÇW.</Text>
                </View>
            </View>
            <View style={{alignItems:'center', padding: 50, flexDirection: 'column'}}>
                <Image style={style.qrcodePix}
                source={require('../../assets/QRcode.png')}/>
                <View style={{flexDirection: 'row', alignItems:'center', paddingTop:20}}>
                    <Image style={{width:40,height:40}}
                    source={require('../../assets/alert.png')}/>
                    <Text style={{textAlign: 'center', fontSize: 15}}>ABRA O APLICATIVO DO SEU BANCO E ESCANEI O QR CODE PARA EFETUAR O PAGAMENTO OU CLIQUE
                         SOBRE O  CÓDIGO PIX COPIA E COLA PARA RECEBER NO E-MAIL CADASTRADO.</Text>
                </View>
            </View>
        </View>
    </View>

    <View style={style.containerBtn}>
        <TouchableOpacity
        onPress={() => navigation.navigate('SelecionarPagamento')}
        >
        <Text style ={style.btnVoltar}>VOLTAR</Text>
        </TouchableOpacity>
    </View>

</View>
)
}


const style = StyleSheet.create({
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
pagamento:{
    flexDirection: 'column',
    paddingTop:200
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
containerBtn:{
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop:50
},
containerPix:{
    marginTop: 15,
    paddingTop:5,
    width: '80%',
    height: '80%',
    alignSelf: 'center', 
},
infoPix:{
    fontSize:25,
    fontWeight:'normal',
    paddingRight:10
},
infoPixRecebida:{
    fontSize:25,
    fontWeight:'bold',

},
containerPixCopiaECola:{
    fontSize:25,
    fontWeight: 'bold',
    backgroundColor: '#F2F2F2',
    color: '#75B0F1',
    padding: 10,
},
qrcodePix:{
    width: 500,
    height:500,
},
})