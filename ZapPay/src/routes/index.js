import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from '../pages/Welcome';
import DetalhesPedidos from '../pages/DetalhesPedidos'
import DetalhesPagamento from "../pages/DetalhesPagamento";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const Routes = () => {
    const { userInfo } = useContext(AuthContext)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.acess_token ? (
                    <Stack.Screen
                        name="Welcome"
                        component={Welcome}
                        options={{ headerShown: false }} />
                ) : (
                    <>
                        <Stack.Screen
                            name="DetalhesPedidos"
                            component={DetalhesPedidos}
                            options={{ headerShown: false }}
                        />

                        <Stack.Screen
                            name="DetalhesPagamento"
                            component={DetalhesPagamento}
                            options={{ headerShown: false }}
                        />
                    </>
                )}



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes