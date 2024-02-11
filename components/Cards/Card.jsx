import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({color}) {
    return (
        <View style={[styles.card, {backgroundColor: color}]}>
            <Text style={styles.cardFont}>{color}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card : {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "#244388",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardFont: {
        fontSize: 24,
        color: '#000000'
    }
})