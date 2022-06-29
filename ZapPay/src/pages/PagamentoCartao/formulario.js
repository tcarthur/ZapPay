import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function Formulario() {
const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        cardNumber: '',
        validade: '',
        CV:''
}
});
const onSubmit = data => console.log(data);

return (
<View style ={{ flexDirection: 'column', alignItems: "center"}}>
                    {/* CONTROLADOR INPUT N° CARTAO */}
    <Controller
    control={control}
    rules={{
        required: true,
    }}
    render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
        style={style.input}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        placeholder='INSIRA O NÚMERO DO CARTÃO'
        />
    )}
    name="cardNumber"
    />
    {errors.cardNumber && <Text>This is required.</Text>}

                        {/* VIEW PARA ALINHAR VENCIMENTO E CV EM LINHA */}
    <View style={{flexDirection:'row',marginVertical: 25}}>
                        {/* CONTROLADOR INPUT DATA VENCIMENTO DO CARTAO  */}
        <Controller
        control={control}
        rules={{
            maxLength: 4,
            required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
            style={style.inputRow}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='VENCIMENTO'
        
            />
        )}
        name="validade"
        />
                        {/* CONTROLADOR INPUT CV DO CARTAO  */}
        <Controller
        control={control}
        rules={{
            maxLength: 3,
            required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
            style={style.inputRow}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='CV'
        
            />
        )}
        name="CV"
        />
    </View>
    <TouchableOpacity  onPress={handleSubmit(onSubmit)} >
        <Text style={style.salvarBtn}> SALVAR </Text>
    </TouchableOpacity>
</View>
);
}

const style = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        width: 450,
        height:60,
        marginBottom: 25,
        color: '#222',
        fontSize: 24,
        borderRadius: 50,
        padding: 10,
        textAlign: 'center',
    },
    inputRow:{
        backgroundColor: '#fff',
        width: 200,
        height:60,
        marginBottom: 25,
        marginLeft:30,
        marginRight:30,
        color: '#222',
        fontSize: 24,
        borderRadius: 50,
        padding: 10,
        textAlign: 'center',
    },
    salvarBtn:{
        backgroundColor: '#069D07',
        color:'#fff',
        padding:15,
        fontSize: 20,
        borderRadius: 50,
        width: 450,
        textAlign: "center"
    },
})

