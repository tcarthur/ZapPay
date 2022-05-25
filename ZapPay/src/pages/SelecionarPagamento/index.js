import React, {useState, useEffect}  from 'react';
import{ View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function SelecionarPagamento() {
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
            <Text style={style.user}>SELECIONE A FORMA DE PAGAMENTO</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
            <Image source={require("../../assets/exit.png")} 
            style={{
              width: 30,
              height: 36,
            }}>
          </Image>
            </TouchableOpacity>
        </View> 

        <View style={style.pagamento}>
            <View style={{alignItems: 'center', padding: 50}}>
              <TouchableOpacity onPress={()=> navigation.navigate('PagamentoCartao')}>
                <Image source={require('../../assets/cartao.png')}/>
              </TouchableOpacity>
                <Text style={{marginTop: 35, fontSize:28, fontWeight: 'bold'}}>CARTÃO DE CREDITO</Text>
            </View>

            <View style={{alignItems: 'center', padding: 50}}>
              <TouchableOpacity onPress={()=> navigation.navigate('PagamentoPix')}>
              <Image source={require('../../assets/pix.png')}/>
              </TouchableOpacity>
              <Text style={{marginTop: 35, fontSize:28, fontWeight: 'bold'}}>PIX</Text>

            </View>
            
          <TouchableOpacity style={style.containerBtn}
          onPress={() => navigation.navigate('Consulta')}
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
      paddingTop:150
    }
})