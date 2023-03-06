import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Dimensions, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import colors from '../../assets/fonts/colors/colors'
const Circles = () => {

    return (
        <View>
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: colors.green,
                borderRadius: 50,
                margin: -40,
            }}></View>
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: colors.beige,
                opacity: 0.8,
                borderRadius: 50,
                overflow: 'hidden',
                margin: -55,
                left: 54,
            }}>

            </View>
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: colors.green,
                borderRadius: 50,
                
        
                alignSelf: 'flex-end'
            }}></View>
        </View>
    )
}
export default Circles;