import { Text, View, Image,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class ImageProduto extends Component {
render() {
    return (
        <View style={style.containerImage}>
            <Image style={style.imageProduct} source={require('../../image/servico.png')}/>
        </View>
    )
}
}
const style = StyleSheet.create({
    containerImage:{justifyContent:'center',alignItems:'center' ,width: 800, height: 400, backgroundColor: '#fff',borderRadius:15,elevation:8},
    imageProduct:{marginVertical:25,resizeMode:'center',width:800,height:500,},
})
