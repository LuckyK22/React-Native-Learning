import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({color, radius}) {
    return (
        <View style={[styles.card, {backgroundColor: color}, {borderRadius: 999}]}>
            <Text style={styles.cardFont}>{color.toUpperCase()}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card : {
        width: 75,
        height: 75,
        margin: 5,
        borderWidth: 4,
        borderColor: "#244388",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardFont: {
        fontSize: 14,
        color: '#000000'
    }
})