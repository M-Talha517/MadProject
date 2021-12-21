import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity , Image} from 'react-native';
import Constants from 'expo-constants';
import { Avatar } from 'react-native-paper';

// props ( avatar , title , isheader , width , )
export const RoundedCardWithAvatar = function (props) {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 12,
          alignSelf: props.isheader ? 'flex-end' : 'center',
          width: props.width ? props.width : '50%',
          flexDirection: 'row',
          height: props.isheader ? 40 : 50,
          alignItems: 'center',
          justifyContent: props.avatar ? 'space-between' : 'center',
          padding: 12,
          paddingLeft: props.avatar ? 20 : 0,
        }}>
        <Text style={{ fontWeight: 'bold', color: 'purple' }}>
          {props.title}
        </Text>
        {props.avatar ? <Avatar.Image size={24} source={props.avatar} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export const RoundedServiceCard = function (props) {
  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          alignSelf: 'center',
          width: props.width ? props.width : '80%',
          height: 250,

          justifyContent: props.avatar ? 'space-between' : 'center',
          padding: 12,
          paddingLeft: props.avatar ? 20 : 12,
        }}>
        <View style={{ flex: 3 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'purple' , alignSelf:"center", textAlign: 'center',}}>THIS PHOTOGRAPHY EVENT</Text>
          <Image
          style = {{width:"90%", height:"75%",alignSelf:"center", margin:8, borderRadius:20}}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
        
        </View>
        <View style={{ flex: 1.2 }}>
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
            <Text style={{ fontSize: 16, color: 'purple' }}>{props.duration}</Text>
          </View>
          {/*MISC CHARGES ROW*/}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'purple' }}>
              Misc Charges:
            </Text>
            <Text style={{ fontSize: 16, color: 'purple' }}>{props.minMisc}-{props.maxMisc}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
