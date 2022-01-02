import * as React from 'react'
import {
  Modal,
  View,
  Pressable,
  TouchableWithoutFeedback,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground

} from 'react-native'
import { TextInput } from 'react-native-paper'

export default function (props) {
  const [isSignIn, setIsSignIn] = React.useState(true)
  return (
    isSignIn?<Signin setIsSignIn={setIsSignIn}/>:<Signup setIsSignIn={setIsSignIn}/>
  )
}

function Signin(props) {

    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <SafeAreaView
          style={{ flex: 2, justifyContent: 'space-between', color: 'white' }}
        >
          <View style={{ left: 0, width: '110%' }}>
            <Background />
          </View>
          <View style={{ top: -40, width: '100%', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, color: '#C99E3F' }}>SIGN IN</Text>
  
            <View style={{ margin: 10, }}>
              <Text style={{ color: 'grey', }}>Or Click 
              <TouchableWithoutFeedback onPressIn={()=>{props.setIsSignIn(false)}} >
                <Text style={{ color: 'blue', fontStyle: 'italic' }}> HERE </Text>
              </TouchableWithoutFeedback>
             to Sign up</Text>
            </View>
            <TextInputField width="90%" label="Email" />
            <TextInputField width="90%" label="Password" />
          </View>
          <RoundedCardWithAvatar title="Sign In" width="25%"  />
  
          <View
            style={{ position: 'relative', left: -5, bottom: 0, width: '110%' }}
          >
            <Background rotate="180deg" />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    )
  }
  

 function Signup(props) {

    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <SafeAreaView
          style={{ flex: 2, justifyContent: 'space-evenly', color: 'white' }}
        >
          <View style={{ left: 0, width: '110%' }}>
            <Background />
          </View>
          <View style={{ top: -40, width: '100%', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, color: '#C99E3F' }}>SIGN UP</Text>
  
            <View style={{ margin: 10, }}>
              <Text style={{ color: 'grey', }}>Or Click 
              <TouchableWithoutFeedback onPressIn={()=>{props.setIsSignIn(true)}} >
                <Text style={{ color: 'blue', fontStyle: 'italic' }}> HERE </Text>
              </TouchableWithoutFeedback>
             to Sign in</Text>
            </View>
            <TextInputField width="90%" label="UserName" />
            <TextInputField width="90%" label="Email" />
            <TextInputField width="90%" label="Password" />
            <TextInputField width="90%" label="Confirm Password" />
          </View>
          <RoundedCardWithAvatar title="Sign Up" width="25%"/>
  
          <View
            style={{ position: 'relative', left: -5, bottom: 0, width: '110%' }}
          >
            <Background rotate="180deg" />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    )
  }
  
  
// This component will be used for User Avatar display as well as for
// for being used as a button
// props ( avatar , title , isHeader , width , marginTop, onPress)
//
const RoundedCardWithAvatar = function (props) {
    return ( 
      <TouchableOpacity
        onPress={props.onPress}
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
            height: props.isHeader ? 46 : props.avatar? 50: 30,
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
  
  
// prop = {label, placeholder, onChangeText, mode, maxLength, marginVertical}
function TextInputField(props) {
    return (
      <TextInput
        theme={{ roundness: 20 }}
        label={props.label ? props.label : ''}
        placeholder={props.placeholder ? props.placeholder : ''}
        mode={props.mode ? props.mode : 'outlined'}
        onChangeText={props.onChangeText}
        multiline={props.multiline ? props.multiline : false}
        maxLength={props.maxLength ? props.maxLength : 30}
        style={{
          marginVertical: props.marginVertical ? props.marginVertical : 10,
          width: props.width ? props.width : '100%',
          alignSelf: 'center',
        }}
      />
    )
  }
  
  
/*props {userName : title of RoundedCardWithAvatar placed as header on top of the background
  , userAvatar: avatar of RCWA
  , height: height of background image}*/
const Background = (props) => {
    return (
      <ImageBackground
        source={require('../assets/Frame7.png')}
        resizeMode="cover"
        blurRadius={props.blurRadius ? props.blurRadius : 0}
        style={{
          transform:[{rotate:props.rotate?props.rotate:"0deg"}],
          width: '100%',
          height: props.height ? props.height : 150,
          zIndex: -1,
        }}
      >
        {props.userName || props.userAvatar ? (
          <RoundedCardWithAvatar
            isHeader="true"
            width={props.buttonWidth}
            title={props.userName}
            avatar={props.avatar}
            onPress={props.onPress}
          />
        ) : null}
        {
          props.topComponent?props.topComponent():null
        }
      </ImageBackground>
    )
  }
  
