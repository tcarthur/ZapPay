import React, {useState, useEffect}  from 'react';
import{ View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function PagamentoPix() {

return (
<View>

    <View style = {style.containerPix}>
        <View>
            <View style = {{ flexDirection:'column', paddingTop: 15, alignItems: 'center'}}>
                <Text style={style.infoPix}>PIX COPIA E COLA:</Text>
                <View>
                    <Text  style={style.containerPixCopiaECola}>ASKLASN oNOSNS0 AS20D4 5604D980 56ED LKASOPD U091 23%% APISD IDQ´WENWQÉC NCDNSC 
                        SDUHCPWQE R65898908915F231+C DFCJIANSD QWEIW EPEJQWOEQWEJQW EÇW.</Text>
                </View>
            </View>
            <View style={{alignItems:'center', padding: 50, flexDirection: 'column'}}>
                <Image style={style.qrcodePix}
                source={require('../../assets/QRcode.png')}/>
                <View style={{flexDirection: 'row', alignItems:'center', paddingTop:20,justifyContent:'center'}}>
                    <Image style={{width:40,height:40}}
                    source={require('../../assets/alert.png')}/>
                    <Text style={{textAlign: 'center', fontSize: 15}}>ABRA O APLICATIVO DO SEU BANCO E ESCANEI O QR CODE PARA EFETUAR O PAGAMENTO OU CLIQUE SOBRE O  CÓDIGO PIX COPIA E COLA PARA RECEBER NO E-MAIL CADASTRADO.</Text>
                </View>
            </View>
        </View>
    </View>
</View>
)
}


const style = StyleSheet.create({

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
    width: 300,
    height:300,
},
})