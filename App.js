import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {RoundedCardWithAvatar, RoundedServiceCard, Background} from "./components/MyComponents"
import { Avatar } from 'react-native-paper';
// You can import from local files



export default function App() {
  return (
    <View style={{backgroundColor:'red'}}>
        {/* <Background/> */}
      <Text>aaa</Text>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor:"red",
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
