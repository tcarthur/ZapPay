import React,{Component} from "react";
import {View,Text,StyleSheet} from 'react-native'
import ImageProduto from "../pages/PagamentoCartao/imageProduto";

export default class Item extends Component {
    render(){
        return(
            <View>
                <View>
                    <ImageProduto/>
                </View>
                <View style={style.resumoPedido}>
                    <Text  style= {{fontSize: 30, fontWeight:'bold',marginBottom:20, color:'white'}}>ITEM:{this.props.data.codigoItem}</Text>
                    <Text  style= {{fontSize: 30, fontWeight:'bold',marginBottom:20, color:'white'}}>PEDIDO:{this.props.data.codigoPedido}</Text>
                    <Text  style= {{fontSize: 30, fontWeight:'bold',marginBottom:20, color:'white'}}>QUANTIDADE{this.props.data.quantidade}</Text>
                    <Text  style= {{fontSize: 30, fontWeight:'bold',marginBottom:20, color:'white'}}>VALOR: R${this.props.data.valor}</Text>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
resumoPedido:{alignItems:'center',backgroundColor:'#069D07',borderRadius:15,marginVertical:15,paddingVertical:25},
})
