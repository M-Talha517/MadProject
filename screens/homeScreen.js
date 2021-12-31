import * as React from 'react'
import RoundedCardWithAvatar from '../components/RoundedCardWithAvatar'
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native'
import Background from '../components/Background'


export const HomeScreen = (props) => {
  return (
    <View>
      <Background
        userName="TEST USER"
        avatar={require('../assets/Frame7.png')}
      />
      <Text
        style={{
          fontSize: 28,
          margin: 12,
          fontWeight: 'bold',
          color: '#C99E3F',
          textAlign: 'center',
        }}
      >
        ARCH PHOTO STUDIO AND FILM MAKERS
      </Text>
      <ScrollView style={{margin:20}}>
          <RoundedCardWithAvatar title="My Services" avatar={require("../assets/Frame7.png")} width="70%"/>

          <RoundedCardWithAvatar title="My Bookings" avatar={require("../assets/Frame7.png")} width="70%"/>
      </ScrollView>
    </View>
  )
}
