import { View, Text , StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Foter() {
  return (
    <View>
      
      <Pressable style={fot.buton}> Let's Go</Pressable>
    </View>
  )
}


const fot = StyleSheet.create({
buton:{
    backgroundColor:'#61a0e5',
    fontSize:35,
    fontWeight:"600",
    borderRadius:25,
    margin:50,
    paddingVertical:25,
    color:'#ffff',
    alignItems:'center'


}
});