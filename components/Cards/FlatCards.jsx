import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import {styles} from '../Styling/Style'

export default function FlatCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>FlatCards</Text>
            <View style={style.center}>
            <Card color="orange"/>
            <Card color="yellow"/>
            <Card color="pink"/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    center: {
        gap: 4,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
})