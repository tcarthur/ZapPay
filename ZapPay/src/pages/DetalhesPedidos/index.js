
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { NomeUser, Descricao } from '../../components/itensAPI';

export default function DetalhesPedidos() {


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
        <View>
          <NomeUser />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Image source={require("../../assets/exit.png")} style={{
            width: 40,
            height: 46,
          }}>
          </Image>
        </TouchableOpacity>
      </View>

      <View>
        <DataTable style={{ height: '90%', paddingTop: 38, paddingLeft: 25, }}>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>PEDIDOS</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>DATA PEDIDO</Text>
            </DataTable.Title>
            <DataTable.Title style={{ paddingLeft: 45 }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>VALOR</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>STATUS</Text>
            </DataTable.Title>
          </DataTable.Header>
          <TouchableOpacity
            style={{ marginVertical: 20 }}
            onPress={() => navigation.navigate('DetalhesPagamento')}>
            <Descricao />
          </TouchableOpacity>

        </DataTable>


        <View style={style.alert}>
          <View>
            <Image source={require("../../assets/alert.png")} style={{
              width: 60,
              height: 60,
            }}>
            </Image>
          </View>
          <View>
            <Text style={{ fontSize: 20 }}> CLIQUE NO PEDIDO PARA MAIS INFORMAÇÕES</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  topBar: {
    backgroundColor: '#069D07',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  alert: {
    flexDirection: 'row',
    paddingTop: 0,
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
})