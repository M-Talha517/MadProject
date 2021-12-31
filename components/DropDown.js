import * as React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'
import Select, { SelectItem } from '@redmin_delishaj/react-native-select'

//props {width, config, data, selectedServiceCategory, setSelectServiceCategory}
export default DropDown = function (props) {
  const data = [
    { text: 'DJ & Music', value: 1 },
    { text: 'Catering', value: 2 },
    { text: 'Decoration', value: 3 },
  ]
  const config = props.config
    ? props.config
    : {
        fontSize: 14,
        backgroundColor: 'white',
        textColor: '#C99E3F',
        selectedBackgroundColor: 'transparent',
        selectedTextColor: 'purple',
        selectedFontWeight: 'bold',
        borderRadius: 20,
        borderColor: '#C99E3F',
        borderWidth: 2,
        
      }

  return (
    <View style={{    width: props.width ? props.width : '60%', paddingLeft: 20 }}>
      <Select
     
        data={props.data?props.data : data}
        onSelect={(value) => props.setSelectedItem(value)}
        value={props.value}
        config={config}
      />
    </View>
  )
}
