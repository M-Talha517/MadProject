import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'


// props {width}
export default function divider(props) {
  return (
    <View
      style={{
        borderBottomColor: '#C99E3F',
        borderBottomWidth: 3,
        width: props.width ? prop.width : '90%',
        alignSelf: 'center',
        marginBottom:20,
        marginTop:3
      }}
    />
  )
}
