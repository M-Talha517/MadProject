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

    </ImageBackground>
  )
}
