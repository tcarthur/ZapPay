import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome';
import DetalhesPedidos from '../pages/DetalhesPedidos'
import Consulta from '../pages/Consulta';
import SelecionarPagamento from '../pages/SelecionarPagamento';
import PagamentoPix from '../pages/PagamentoPix';
import PagamentoCartao from '../pages/PagamentoCartao'
import pagamentoConcluido from "../pages/PagamentoConcluido/pagamentoConcluido";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = "Welcome"
            component={Welcome}
            options={{ headerShown: false}}
            />
            
            <Stack.Screen
            name = "DetalhesPedidos"
            component={DetalhesPedidos}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name = "Consulta"
            component={Consulta}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name = "SelecionarPagamento"
            component={SelecionarPagamento}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name = "PagamentoPix"
            component={PagamentoPix}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name = "PagamentoCartao"
            component={PagamentoCartao}
            options={{ headerShown: false}}
            />
            <Stack.Screen
            name = "pagamentoConcluido"
            component={pagamentoConcluido}
            options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}