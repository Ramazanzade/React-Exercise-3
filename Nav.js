import { View, Text, StyleSheet ,Image } from 'react-native'
import React from 'react'
import { BiListUl } from "react-icons/bi";

export default function Nav() {
  return (
    <View style={nav.div}>

<View style={nav.div1}>
<Image
        style={nav.logo}
        source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png',
        }}
      />

    <View style={{flexDirection:'column' ,  alignItems:'center' , marginTop:50}}>
    <Text style={{fontSize:20 , fontWeight:'600'}}> Nizam Ramazanzade</Text>
    <Text style={{fontSize:10}}>ramazanov570633@gmail.com</Text>
    </View>
</View>


<View>

<BiListUl style={{ fontSize:30 , marginTop:50}}></BiListUl>
</View>




    </View>
  )
}




const nav = StyleSheet.create({
  logo:{
    width:100,
    height:80,
    marginTop:35
  },
  div:{
    backgroundColor:'#abbfd5',
    flexDirection:"row",
    justifyContent:'space-between',
    paddingBottom:50
    

  },
  div1:{
flexDirection:'row'
  }
});