import React, {useState, useEffect}  from 'react';
import{ View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function SelecionarPagamento() {
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
        <Text style={style.user}>SELECIONE UM CARTÃO</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
        <Image source={require("../../assets/exit.png")} 
        style={{
            width: 30,
            height: 36,
        }}>
        </Image>
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
})