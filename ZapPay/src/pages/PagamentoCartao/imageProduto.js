import { Text, View, Image,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { ScreenContainer } from 'react-native-screens'

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
    containerImage:{justifyContent:'center',alignItems:'center' ,width: 800, height: 400, backgroundColor: '#f0f0f0',borderRadius:15,},
    imageProduct:{marginVertical:25,resizeMode:'center',width:800,height:500,},
})
