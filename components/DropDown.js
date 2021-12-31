import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Select, { SelectItem } from '@redmin_delishaj/react-native-select';

//props {config, 
export default DropDown = function(props){
    const data = [
    { text: 'Option 1', value: 1 },
    { text: 'Option 2', value: 2 },
    { text: 'Option 3', value: 3 },
  ];
    const config = props.config?props.config:{
      fontSize: 14,
      backgroundColor: 'white',
      textColor: 'grey',
      selectedBackgroundColor: 'transparent',
      selectedTextColor: 'purple',
      selectedFontWeight: 'bold',
      borderRadius:20,
    }
    const [selectedItem, setSelectedItem] = React.useState();
    return(
          <View style={{width:"80%", paddingLeft:20}}>
            <Select
            data={data}
            onSelect={value => setSelectedItem(value)}
            value={selectedItem}
            config={config}
          />
          </View>  
    )
  }