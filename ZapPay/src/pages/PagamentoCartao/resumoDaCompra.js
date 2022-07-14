import { useState} from 'react';
import { View,StyleSheet,Text,TouchableOpacity,SafeAreaView, ScrollView,Modal,Alert, ViewPagerAndroidBase,} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {ListaItens} from './listaItens'; 

export default function ResumoDaCompra() {

    const [modalVisible,setModalVisible] = useState(false)
    const navigation = useNavigation(); 


return (

    <View style ={ style.screen}>
        <View style={style.container}>
            <SafeAreaView style={style.containerResumo}>
                    <ScrollView>
                        <View>
                            <ListaItens/>
                        </View> 
                    </ScrollView>
                <View>
                    <Modal     
                        animationType="fade"
                        visible={modalVisible}
                        transparent={true}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                        >
                        <View style={style.modalPagamento}>
                            <View style={{height:'86%',width:'90%',margin:22,alignItems:'center',marginHorizontal:10}}>
                                <Text style={{fontSize: 40, fontWeight:'bold',marginBottom:20, color:'black'}}> CARTÃO 1</Text>
                            </View>
                            <View style={style.containerBtn}>

                                <TouchableOpacity  onPress={()=>navigation.navigate('pagamentoConcluido')}> 
                                    <Text  style = { style.btnPagamentos}>PAGAR</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}> 
                                    <Text  style = { style.btnCancelar}>SAIR</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </Modal>
                </View>
            </SafeAreaView>
        </View>
        <View style={style.containerBtn}>
            <View>
                <TouchableOpacity onPress={() => setModalVisible(true)}> 
                    <Text  style = { style.btnPagamentos}>PAGAMENTOS</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity  onPress={()=>navigation.navigate('SingIn')}> 
                    <Text  style = { style.btnVoltar}>VOLTAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
}

const style = StyleSheet.create({
    screen:{flex:1,alignItems:'center',backgroundColor:'white'},
    container:{backgroundColor:'#f0f0f0',elevation:2,alignContent:'center',alignItems: 'center',width:'95%',height:'80%',marginBottom:16,marginTop:20,borderRadius:28},
    containerBtn:{flexDirection:'row-reverse', justifyContent:'space-around',width:'100%'},
    containerResumo:{alignItems:'center',marginVertical:50,height:'85%',width:'95%', },
    btnPagamentos:{backgroundColor:'#069D07', color:'white',elevation:3.5 ,padding:25,fontSize:25,borderRadius:35,width:300,fontWeight:'bold',textAlign:'center'},
    btnVoltar:{backgroundColor:'red', color:'white',elevation:3.5 ,padding:25,fontSize:25,borderRadius:35,width:300,fontWeight:'bold',textAlign:'center'},
    modalPagamento:{alignItems:'center' ,bottom:0 ,position: 'absolute',height:'88%',backgroundColor: '#f0f0f0',opacity:30 ,width: '100%',borderTopLeftRadius: 45,borderTopRightRadius: 45,paddingLeft: 25,paddingRight: 25,},
    btnCancelar:{backgroundColor:'red', color:'white', padding:25,fontSize:25,borderRadius:35,width:300,fontWeight:'bold',textAlign:'center'}
    
})