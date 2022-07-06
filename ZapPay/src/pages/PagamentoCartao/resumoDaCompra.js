import { useState } from 'react';
import { View,StyleSheet,Image,Text,TouchableOpacity,SafeAreaView, ScrollView,StatusBar,Modal,Alert} from 'react-native'



export default function ResumoDaCompra() {

    const [modalVisible,setModalVisible] = useState(false)

return (
    <SafeAreaView style ={ style.screen}>
        <ScrollView>     
            


            <View style={style.containerResumo}>
                <View style={style.Produto}>
                    <Image style={style.imageProduct} source={require('../../image/card-back.png')}/>

                    <View style={style.resumoPedido}>
                        <Text style= {{fontSize: 40, fontWeight:'bold',marginBottom:20}}> PEDIDO: 766969</Text>
                        <Text style= {{fontSize: 30, fontWeight:'bold',marginBottom:20}}> 27001515 - Cartão Loja Cliente 1</Text>
                        <Text style= {{fontSize: 30, fontWeight:'bold',marginBottom:20}}> 1 unid.</Text>
                        <Text style= {{fontSize: 30, fontWeight:'bold',marginBottom:20}}> R$300,00</Text>
                    </View>
                    
                </View>
                <View>
                    <Modal     
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                        >
                        <Text> CARTÃO 1</Text>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}> 
                            <Text>Sair</Text>
                        </TouchableOpacity>
                    </Modal>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)}> 
                    <Text>MOSTRAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>

    );
}

const style = StyleSheet.create({
    screen:{flex: 1,paddingTop: StatusBar.currentHeight,backgroundColor:'#fff'},
    containerResumo:{justifyContent:'center', alignItems:'center'},
    Produto:{justifyContent:'center', alignItems:'center'},
    imageProduct:{maxWidth:300, maxHeight:200,marginVertical: 55},
    resumoPedido:{flexDirection: 'column',height:250,marginLeft:25,},

})