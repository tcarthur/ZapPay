import React, { Component } from "react";
import { View,FlatList } from "react-native";
import api from "../../service/Api";
import {Item,Usuario,Descricacao} from "../../components";

export  class ListaItens extends Component{

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
export class NomeUser extends Component{

  constructor(props){
    super(props);
    this.state = {
      user: []
    }
  }

    async componentDidMount(){
      const response = await api.get('apiCliente/v1/infoPedido')
      this.setState({
        user: response.data
      });
    }

    render(){
      return(
        <View>
          <FlatList
          data={this.state.user}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Usuario data={item} />}
          />
        </View>
      )
    }
}

export class DescricaoProduto extends Component{

  constructor(props){
    super(props);
    this.state = {
      descricacao: []
    }
  }

    async componentDidMount(){
      const response = await api.get('apiCliente/v1/infoPedido')
      this.setState({
        descricacao: response.data
      });
    }

    render(){
      return(
        <View>
          <FlatList
          data={this.state.user}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Descricao data={item} />}
          />
        </View>
      )
    }
}
