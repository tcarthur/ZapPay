
import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
let customFonts = { 'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf')}

export default function SignIn() {
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
    </View>
  )
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
      fontSize: 25,
      color: '#fff',
      fontFamily:'OpenSans-Black'
    },
})