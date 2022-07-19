import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView,} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ListaItens } from './itensAPI';

export default function ResumoDaCompra() {

    const navigation = useNavigation();


    return (

        <View style={style.screen}>
            <View style={style.container}>
                <SafeAreaView style={style.containerResumo}>
                    <ScrollView>
                        <View>
                            <ListaItens/>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
            <View style={style.containerBtn}>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('DetalhesPedidos')}>
                        <Text style={style.btnVoltar}>VOLTAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    screen: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
    container: { backgroundColor: '#f0f0f0', elevation: 2, alignContent: 'center', alignItems: 'center', width: '95%', height: '80%', marginBottom: 16, marginTop: 20, borderRadius: 28 },
    containerBtn: { flexDirection: 'row-reverse', justifyContent: 'space-around', width: '100%' },
    containerResumo: { alignItems: 'center', marginVertical: 50, height: '85%', width: '95%', },
    btnPagamentos: { backgroundColor: '#069D07', color: 'white', elevation: 3.5, padding: 25, fontSize: 25, borderRadius: 35, width: 300, fontWeight: 'bold', textAlign: 'center' },
    btnVoltar: { backgroundColor: 'red', color: 'white', elevation: 3.5, padding: 25, fontSize: 25, borderRadius: 35, width: 300, fontWeight: 'bold', textAlign: 'center' },
    modalPagamento: { alignItems: 'center', bottom: 0, position: 'absolute', height: '88%', backgroundColor: '#f0f0f0', opacity: 30, width: '100%', borderTopLeftRadius: 45, borderTopRightRadius: 45, paddingLeft: 25, paddingRight: 25, },
    btnCancelar: { backgroundColor: 'red', color: 'white', padding: 25, fontSize: 25, borderRadius: 35, width: 300, fontWeight: 'bold', textAlign: 'center' }

})