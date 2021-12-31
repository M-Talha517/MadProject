import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Avatar, IconButton } from 'react-native-paper';


// This component will be used for User Avatar display as well as for
// for being used as a button
// props ( avatar , title , isHeader , width , marginTop)
//
export default RoundedCardWithAvatar = function (props) {
  return ( 
    <TouchableOpacity
      onPress={()=>{}}
      disabled={props.onPress?false:true}
    >
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          margin:8,
          marginRight:props.isHeader?8:0,
          borderWidth:2,
          borderColor:"#C99E3F",
          alignSelf: props.isHeader ? 'flex-end' : 'center',
          width: props.width ? props.width : '50%',
          //to make the view row wise
          flexDirection: 'row',
          height: props.isheader ? 40 : props.avatar? 50:30,
          //for vertical alignment
          alignItems: 'center',
          //for horizontal alignment
          justifyContent: props.avatar ? 'space-between' : 'center',
          paddingHorizontal: 12,
          // paddingLeft: props.avatar ? 20 : 12,
        }}>
        <Text style={{ fontWeight: 'bold', color: 'purple' }}>
          {props.title}
        </Text>
        {props.avatar ? <Avatar.Image size={24} source={props.avatar} /> : null}
      </View>
    </TouchableOpacity>
  );
  
};

