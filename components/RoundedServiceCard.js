import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Avatar, IconButton } from 'react-native-paper';
import Select, { SelectItem } from '@redmin_delishaj/react-native-select';

// props ( avatar , title , price,  duration, miscCharges, width , onPressEdit, onPressDelete )
export default function RoundedServiceCard (props) {
  return (
    <TouchableOpacity style={{ flex: 1}  }>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          borderWidth:1,
          borderColor:"#C99E3F",
          alignSelf: 'center',
          width: props.width ? props.width : '65%',
          height: 270,
          justifyContent: 'center',
          padding: 12,
          marginBottom:10,
        }}>
        <View style={{ flex: 3 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'purple',
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            {props.title?props.title:" "}
          </Text>
          <Image
            style={{
              width: '90%',
              height: '70%',
              alignSelf: 'center',
              margin: 8,
              borderRadius: 8,
            }}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
        </View>
        <View style={{ flex: 2.2 }}>
          {/*PRICE ROW*/}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'purple' }}>
              PRICE:
            </Text>
            <Text style={{ fontSize: 16, color: 'purple' }}>{props.price}</Text>
          </View>
          {/*Duration ROW*/}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'purple' }}>
              Duration:
            </Text>
            <Text style={{ fontSize: 16, color: 'purple' }}>
              {props.duration}
            </Text>
          </View>
          {/*MISC CHARGES ROW*/}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'purple' }}>
              Misc Charges:
            </Text>
            <Text style={{ fontSize: 16, color: 'purple' }}>
              {props.miscCharges}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'space-between',
              width: '60%',
            }}>
            <IconButton
              icon="pen"
              color="red"
              size={20}
              mode="outlined"
              onPress={props.onPressEdit}
            />
            <IconButton
              icon="delete"
              color="red"
              size={20}
              mode="outlined"
              onPress={props.onPressDelete}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
