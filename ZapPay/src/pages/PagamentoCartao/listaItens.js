import React, { Component } from "react";
import { View,FlatList } from "react-native";
import api from "../../service/Api";
import Item from "../../components";


export default class ListaItens extends Component{

  constructor(props){
    super(props);
    this.state = {
      itens: []
    }
  }

    async componentDidMount(){
      const response = await api.get('apiCliente/v1/infoPedido')
      this.setState({
        itens: response.data
      });
    }

    render(){
      return(
        <View>
          <FlatList
          data={this.state.itens}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Item data={item} />}
          />
        </View>
      )
    }

}