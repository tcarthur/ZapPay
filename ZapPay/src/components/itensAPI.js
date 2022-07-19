import React, { Component } from "react";
import { View,FlatList } from "react-native";
import api from '../service/Api'
import {Item,Usuario,DescricaoProduto} from "../components";

export  class ListaItens extends Component{

  constructor(props){
    super(props);
    this.state = {
      itens: []
    }
  }

    async componentDidMount(){
      const response = await api.get('/apiCliente/v1/infoPedido')
      this.setState({
        itens: response.data
      });
    }

    render(){
      return(
          <FlatList
          data={this.state.itens}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Item data={item} />}
          />
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
      const response = await api.get('/apiCliente/v1/infoPedido')
      this.setState({
        user: response.data
      });
    }

    render(){
      return(
          <FlatList
          data={this.state.user}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Usuario data={item} />}
          />
      )
    }
}

export class Descricao extends Component{

  constructor(props){
    super(props);
    this.state = {
      descricao: []
    }
  }

    async componentDidMount(){
      const response = await api.get('/apiCliente/v1/infoPedido')
      this.setState({
        descricao: response.data
      });
    }

    render(){
      return(
        <View>
          <FlatList
          data={this.state.descricao}
          keyExtractor={item => item.id}
          renderItem={({item}) => <DescricaoProduto data={item} />}
          />
        </View>
      )
    }
}
