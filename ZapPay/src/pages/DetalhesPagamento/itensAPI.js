import React, { Component } from "react";
import { View,List,Text } from "react-native";
import api from "../../service/Api";
import {Item,Usuario,DescricaoProduto} from "../../components";
import { List } from "react-native-paper";

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
          <List
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
          <Text
          data={this.state.user}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Usuario data={item} />}
          />
        </View>
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
      const response = await api.get('apiCliente/v1/infoPedido')
      this.setState({
        descricao: response.data
      });
    }

    render(){
      return(
        <View>
          <List
          data={this.state.descricao}
          keyExtractor={item => item.id}
          renderItem={({item}) => <DescricaoProduto data={item} />}
          />
        </View>
      )
    }
}
