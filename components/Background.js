import * as React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'
import RoundedCardWithAvatar from './RoundedCardWithAvatar'

//props {userName, userAvatar,
export default Background = (props) => {
  return (
    <ImageBackground
  
      source={require('../assets/Frame7.png')}
      resizeMode="cover"
      style={{ width: '100%', height: 180 }}
    >
      <RoundedCardWithAvatar
        isHeader="true"
        title={props.userName}
        avatar={props.avatar}
      />

      {props.isServiceScreen?<View style={{ width:"100%",bottom:40, position:"absolute", flexDirection:'row', justifyContent:"space-evenly"}}>
        <RoundedCardWithAvatar title="My Services" width="70%"/>
        <RoundedCardWithAvatar title="Add New Service" width="70%"/>
      </View>:null}
    </ImageBackground>
  )
}
