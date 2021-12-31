import * as React from 'react';
import RoundedCardWithAvatar from '../components/RoundedCardWithAvatar';
import {SafeAreaView, Text, View, StyleSheet, } from 'react-native';
import Background from '../components/Background';


export const HomeScreen = (props)=>{
    return(
        <View>
            <Background userName="TEST USER" avatar = {require("../assets/Frame7.png")}/>
        </View>
    )
}
