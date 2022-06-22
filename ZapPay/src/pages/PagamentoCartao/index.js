import React, {useState}  from 'react';
import{ View, Image, TextInput, TouchableOpacity, StyleSheet, Modal,Pressable, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton, Text } from 'react-native-paper';


export default function SelecionarPagamento() {
const navigation = useNavigation();
const [value, setValue] = React.useState('first');
const [modalVisible, setModalVisible] = useState(false);

return (
<View style={{flex:1}}>

    {/* BARRA SUPERIOR */}
    <View style={style.topBar}>
        <Image source={require("../../assets/logoZap.png")} 
        style={{
            width: 64,
            height: 64,
        }}>
        </Image>
        <Text style={style.user}>SELECIONE UM CARTÃO</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
        <Image source={require("../../assets/exit.png")} 
        style={{
            width: 40,
            height: 46,
        }}>
        </Image>
        </TouchableOpacity>
    </View> 

        {/* CONTAINER DE CADASTRO */}
        <View style={{flex:1}}>
            <View style={style.containerCadastro}>
                <View style={style.cadastro}>

                    {/* BUTÕES PARA SELECIONAR CARTÃO */}
                    <RadioButton.Group onValueChange={newValue=>setValue(newValue)} value={value}>
                            <View style = {style.cartaoExistente}>
                                <Text style={{fontSize:28}}> CARTÃO EXISTENTE</Text>
                                <RadioButton value="first"/>
                            </View>

                            {/* NOVO CARTÃO */}
                            <View style={style.novoCartao}>
                                <View>
                                    <Pressable
                                    style = {{flexDirection:'row'}}
                                    onPress={() => setModalVisible(true)}
                                    >
                                        <Text style={{fontSize:28}}>CADASTRAR NOVO CARTÃO</Text>
                                        <RadioButton value="second"/>
                                    </Pressable>
                            </View>

                            {/* CARTÕES CADASTRADOS */}
                            <View>

                            </View>


                            {/* INFORMAÇÕES PARA CADASTRO DE NOVO CARTÃO */}
                            <View style={style.centeredView}>
                                <Modal
                                style={{alignContent:'center'}}
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                                }}>
                                    <View style = {style.containerModal}>
                                        <View style={{paddingTop: 40}}>
                                            <View style={{paddingTop: 35
                                            }}>
                                                <TextInput style={style.inputNome}
                                                placeholder="NOME"
                                                autoCorrect={false}
                                                onChangeText={()=>{}}
                                                />
                                            </View>
                                            <View style={{paddingTop: 35
                                            }}>
                                                <TextInput style={style.inputNumeroCartao}
                                                placeholder="NÚMERO DO CARTÃO"
                                                autoCorrect={false}
                                                onChangeText={()=>{}}
                                                />
                                            </View>
                                            <View style={{paddingTop: 35, flexDirection: 'row', justifyContent: 'space-between'
                                            }}>
                                                <TextInput style={style.inputValidade}
                                                placeholder="DATA DE VALIDADE"
                                                autoCorrect={false}
                                                onChangeText={()=>{}}
                                                />
                                                <TextInput style={style.inputCV}
                                                placeholder="CV"
                                                autoCorrect={false}
                                                onChangeText={()=>{}}
                                                />
                                            </View>
                                        </View>
                                        <Pressable
                                        onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Text style={style.btnVoltar}>VOLTAR</Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                            </View>
                        </View>
                    </RadioButton.Group>
                    {/* FIM DO CADASTRO */}
                </View>
            </View>

            {/* RODAPE*/}
            <View style={style.rodape}>
                <View style={style.containerBtn}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SelecionarPagamento')}
                    >
                    <Text style ={style.btnVoltar}>VOLTAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SelecionarPagamento')}
                    >
                    <Text style ={style.btnAvancar}>AVANÇAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
)
}

// --------------------------------------------------------------ESTILO-------------------------------------------------------------------
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
centeredView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
},
containerModal:{
width:'90%',
height:'60%',
margin:480,
alignSelf:'center',
flexDirection: 'column'
},
containerCadastro:{
    flex:1,
    margin:20,
},
cadastro:{
    flexDirection:'column',
    margin:35,
},
novoCartao:{
    flexDirection: 'column',
    paddingTop:30
},
cartaoExistente:{
    flexDirection:'row',
    paddingTop: 25
},

rodape:{
padding:20,
},
containerBtn:{
    flexDirection: 'row',
    justifyContent: 'space-between' 
},
btnVoltar:{
    backgroundColor:'red',
    color: '#fff',
    fontSize:24,
    fontWeight:'bold',
    borderRadius: 50,
    padding: 25,
    width:270,
    textAlign: 'center',
},
btnAvancar:{
    backgroundColor:'green',
    color: '#fff',
    fontSize:24,
    fontWeight:'bold',
    borderRadius: 50,
    padding: 25,
    width:270,
    textAlign: 'center',
},
inputNome:{
    backgroundColor: '#fff',
    width: '100%',
    height:60,
    marginBottom: 25,
    color: '#222',
    fontSize: 24,
    borderRadius: 50,
    padding: 10,
    textAlign: 'center',
},
inputNumeroCartao:{
    backgroundColor: '#fff',
    width: '100%',
    height:60,
    marginBottom: 25,
    color: '#222',
    fontSize: 24,
    borderRadius: 50,
    padding: 10,
    textAlign: 'center',
},
inputValidade:{
    backgroundColor: '#fff',
    width: '55%',
    height:60,
    marginBottom: 25,
    color: '#222',
    fontSize: 24,
    borderRadius: 50,
    padding: 10,
    textAlign: 'center',
},
inputCV:{
    backgroundColor: '#fff',
    width: '35%',
    height:60,
    marginBottom: 25,
    color: '#222',
    fontSize: 24,
    borderRadius: 50,
    padding: 10,
    textAlign: 'center',
},
});