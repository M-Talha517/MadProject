import * as React from 'react'
import RoundedCardWithAvatar from '../components/RoundedCardWithAvatar'
import RoundedServiceCard from '../components/RoundedServiceCard'
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native'
import Background from '../components/Background'
import { FlatList } from 'react-native-gesture-handler'
import Divider from '../components/divider'
import DropDown from '../components/DropDown'


export default function ServicesScreen(props) {
  const [category, setCategory] = React.useState('')
  const data = [
    { title: 'title', price: 123, duration: '3days', miscCharges: 300 },
    { title: 'title', price: 123, duration: '3days', miscCharges: 300 },
  ]
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '100',
          alignSelf: 'center',
          color:"grey",
          position: 'absolute',
          top: -80,
          zIndex:2
        }}
      >MY SERVICES</Text>
      <View
        style={{
          width: '100%',
          top: -45,
          zIndex: 1,
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <RoundedCardWithAvatar
          title="My Services"
          width="70%"
          onPress={() => {}} /* to be implemented */
        />
        <RoundedCardWithAvatar
          title="Add New Service"
          width="70%"
          onPress={() => {}} /* to be implemented */
        />
      </View>
      <Divider />
      <View
        style={{
          paddingHorizontal: 12,
          top: -7,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, color: '#C99E3F' }}>CATEGORY:</Text>
        <DropDown /* to be implemented */
          value={category}
          setSelectedItem={setCategory}
        />
      </View>
      <Divider />
      <FlatList /* to be implemented */
        style={{marginBottom:104}}
        keyExtractor={(item, index) => index.toString()}
        data={props.data ? props.data : data} // to be implemented
        renderItem={({ item }) => (
          <RoundedServiceCard
            title={item.title}
            price={item.price}
            duration={item.duration}
            miscCharges={item.miscCharges}
            onPressEdit={() => {}} // to be implemented
            onPressDelete={() => {}} // to be implemented
          />
        )}
      />
    </View>
  )
}
