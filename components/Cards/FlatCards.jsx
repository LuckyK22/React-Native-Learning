import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import {style} from '../Styling/Style'

export default function FlatCards() {
    return (
        <View style={style.container}>
            <Text style={style.heading}>FlatCards</Text>
            <View style={styles.center}>
                <Card color="orange"/>
                <Card color="yellow"/>
                <Card color="pink"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
})