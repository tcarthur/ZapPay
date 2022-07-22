import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome';
import DetalhesPedidos from '../pages/DetalhesPedidos'
import DetalhesPagamento from "../pages/DetalhesPagamento";

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
            name = "DetalhesPagamento"
            component={DetalhesPagamento}
            options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}