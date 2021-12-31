import * as React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Background from './components/Background'
import { Avatar } from 'react-native-paper'
// You can import from local files
import HomeScreen from './screens/homeScreen'
import ServicesScreen from './screens/servicesScreen'
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator()

export default function app(){
  const [userName, setUserName] = React.useState('TEST USER')
  return(
    <Application userName={userName}/>
  )
}

function Application(props) {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            header: () => (
              <Background
                userName={props.userName}
                avatar={require('./assets/Frame7.png')}
              />
            ),
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Services" component={ServicesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
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
})
