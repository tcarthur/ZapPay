
import { View, Text, Image,StyleSheet, Akert, TouchableOpacity} from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';


export default function SignIn() {

  
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
        <Text style={style.user}> SEJA BEM VINDO USUÁRIO</Text>
        <Image source={require("../../assets/exit.png")} style={{
          width: 30,
          height: 36,
        }}>
        </Image>
        </View> 

        <View>
          <DataTable style={{ height: '90%', paddingLeft: 25, paddingTop: 38}}>
            <DataTable.Header>
                <DataTable.Title>
                  <Text style = {{ fontSize: 25, fontWeight:'bold'}}>PEDIDOS</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style = {{ fontSize: 25, fontWeight:'bold'}}>DATA DO PEDIDO</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style = {{ fontSize: 25, fontWeight:'bold'}}>VALOR</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style = {{ fontSize: 25, fontWeight:'bold'}}>STATUS</Text>
                </DataTable.Title>
            </DataTable.Header>
            <TouchableOpacity onPress={()=>navigation.navigate('Consulta')}>
              <DataTable.Row >
                  <DataTable.Cell>
                    <Text style={{fontSize:28}}>
                      766969
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={{fontSize:28}}>
                      11/11/2022
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={{fontSize:28}}>
                      R$560,00
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text style={{fontSize:28}}>
                      PAGO
                    </Text>
                  </DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
          </DataTable>
            <View style={style.alert}> 
              <View>
                <Image  source={require("../../assets/alert.png")} style={{
                  width: 60,
                  height: 60,
                }}>
                </Image>
                </View>
                <View>
                <Text style={{fontSize:20}}> CLIQUE NO PEDIDO PARA MAIS INFORMAÇÕES</Text>
                </View>
              </View>
            </View>
    </View>
  );
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
    alert:{
      flexDirection:'row',
      paddingTop: 0,
      color: '#000000',
      justifyContent: 'center',
      alignItems:'center'
    },
})