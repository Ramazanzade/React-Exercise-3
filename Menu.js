import { View, Text, StyleSheet,Image, Pressable } from 'react-native'
import React from 'react'
import { BiCheck } from "react-icons/bi";
export default function Menu() {
  return (
    <View style={{margin:20}}>
<View style={{alignItems:'center', marginTop:20}}>
    
<Text style={{ fontSize:30 , fontWeight:'800' , alignItems:'center'}}> Follow New Friends</Text>
<Text style={{ fontSize:15  , alignContent:'center'}}>Follow Friends You Know</Text>


</View>


<View style={menu.div2}>
    
<View style={menu.div1}>
<Image
        style={menu.logo}
        source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png',
        }}
      />

    <View style={{flexDirection:'column' , marginTop:25  }}>
    <Text style={{fontSize:15 , fontWeight:'600' }}> Nizam Ramazanzade</Text>
    <Text style={{fontSize:6}}>ramazanov570633@gmail.com</Text>
    </View>
</View>


<View>
    <Pressable style={menu.buton}> Following</Pressable>
</View>
</View>


<View style={menu.div2}>
    
<View style={menu.div1}>
<Image
        style={menu.logo}
        source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Picture.png',
        }}
      />

    <View style={{flexDirection:'column' , marginTop:25  }}>
    <Text style={{fontSize:15 , fontWeight:'600' }}>Jenefer Lopez</Text>
    <Text style={{fontSize:6}}>ramazanov570633@gmail.com</Text>
    </View>
</View>


<View>
    <Pressable style={menu.buton}> Following</Pressable>
</View>
</View>





<View style={menu.div2}>
    
<View style={menu.div1}>
<Image
        style={menu.logo}
        source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Picture.png',
        }}
      />

    <View style={{flexDirection:'column' , marginTop:25  }}>
    <Text style={{fontSize:15 , fontWeight:'600' }}> Di Maria</Text>
    <Text style={{fontSize:6}}>ramazanov570633@gmail.com</Text>
    </View>
</View>


<View>
    <Pressable style={{...menu.buton, backgroundColor:'#91c2f7' , flexDirection:'row'}}> Follow <BiCheck></BiCheck> </Pressable>
</View>
</View>










<View style={menu.div2}>
    
<View style={menu.div1}>
<Image
        style={menu.logo}
        source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png',
        }}
      />

    <View style={{flexDirection:'column' , marginTop:25  }}>
    <Text style={{fontSize:15 , fontWeight:'600' }}>Leo Messi</Text>
    <Text style={{fontSize:6}}>ramazanov570633@gmail.com</Text>
    </View>
</View>


<View>
    <Pressable style={menu.buton}> Following</Pressable>
</View>
</View>

















<View style={menu.div2}>
    
<View style={menu.div1}>
<Image
        style={menu.logo}
        source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png',
        }}
      />

    <View style={{flexDirection:'column' , marginTop:25  }}>
    <Text style={{fontSize:15 , fontWeight:'600' }}> Nizam Ramazanzade</Text>
    <Text style={{fontSize:6}}>ramazanov570633@gmail.com</Text>
    </View>
</View>


<View>
    <Pressable style={menu.buton}> Following</Pressable>
</View>
</View>








<View style={menu.div2}>
    
<View style={menu.div1}>
<Image
        style={menu.logo}
        source={{
          uri: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png',
        }}
      />

    <View style={{flexDirection:'column' , marginTop:25  }}>
    <Text style={{fontSize:15 , fontWeight:'600' }}> Nizam Ramazanzade</Text>
    <Text style={{fontSize:6}}>ramazanov570633@gmail.com</Text>
    </View>
</View>


<View>
    <Pressable style={menu.buton}> Following</Pressable>
</View>
</View>



    </View>
  )
}


const menu = StyleSheet.create({
    logo:{
    width:100,
    height:80,
  
  },
  div1:{
flexDirection:'row'
  },
  buton:{
    backgroundColor:'#328aeb',
    borderRadius:25,
paddingHorizontal:15,
paddingVertical:5,
    marginTop:25
  },
  div2:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:50
  }
});