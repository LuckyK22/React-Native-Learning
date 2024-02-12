import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native'

import { style } from "../Styling/Style"
import Card from './Card'

export default function HorizontalCard() {
    return (
        <View style={style.container}>
            <Text style={style.heading}>Horizontal Card</Text>
            <ScrollView horizontal>
                    <Card color="red" />
                    <Card color="grey" />
                    <Card color="green" />
                    <Card color="purple" />
                    <Card color="violet" />
                    <Card color="silver" />
                    <Card color="gold" />
                    <Card color="pink" />
                    <Card color="indigo" />
                    <Card color="blue" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    circleCards:{
        borderRadius: 999
    }
})

