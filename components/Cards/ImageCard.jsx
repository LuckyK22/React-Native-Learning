import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { style } from "../Styling/Style"


const Card = ({imageChar, title, anime, description, site}) => {

    function openWebsite(siteLink){
        Linking.openURL(siteLink)
    }
    return (
        <View style={styles.ImageCard}>
            <Image
                source={{
                    uri: imageChar
                }}
                style={styles.image}
            />
            <View style={styles.ImageText}>
                <View style={styles.character}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.anime}>{anime}</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => openWebsite(site)}><Text style={styles.button}>Read More</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default function ImageCard() {
    return (
        <View style={style.container}>
            <Text style={style.heading}>ImageCard</Text>
            <Card 
            imageChar={'https://images7.alphacoders.com/134/1341150.png'}
            title='Itachi Uchiha'
            anime='Naruto: Shippuden'
            description='Itachi Uchiha is a character in the manga and anime series Naruto. He is a member of the Uchiha Clan, a rogue shinobi from the Village Hidden in the Leaves, and the youngest member of Anbu Black Ops.'
            site = 'https://en.wikipedia.org/wiki/Itachi_Uchiha'
            />
            <Card 
            imageChar={'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/01/bungou-stray-dogs-15-facts-you-didn-t-know-about-osamu-dazai-1.jpg'}
            title='Osamu Dazai'
            anime='Bungo Stray Dogs'
            description='Osamu Dazai is a fictional character featured in the manga series Bungo Stray Dogs. He is a member of the Armed Detective Agency who mentors the protagonist, Atsushi Nakajima, into his group while dealing with other enemies facing them.'
            site = 'https://en.wikipedia.org/wiki/Osamu_Dazai'
            />
            <Card 
            imageChar={'https://i.redd.it/ozcq99ip9xs41.jpg'}
            title='Shoyo Hinata'
            anime='Haikyu!!'
            description='Shoyo Hinata is a fictional character and the main protagonist of the manga series Haikyu!! created by Haruichi Furudate. Shoyo is a high school student who wishes to become like the "Little Giant," a former Karasuno High School student and volleyball club member. '
            site = 'https://en.wikipedia.org/wiki/Shoyo_Hinata'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ImageCard: {
        borderRadius: 8,
        backgroundColor: '#5d5d5d',
        marginBottom: 20,
        elevation: 5
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 200,
        width: '100%',
        resizeMode: 'cover',
        elevation: 5
    },
    ImageText :{
        paddingHorizontal: 10,
        paddingVertical: 5,
        elevation: 5
    },
    character: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        elevation: 5
    },
    anime: {
        fontSize: 16,
    },
    description: {
        marginTop: 6,
        fontSize: 15,
        textAlign: 'justify',
        elevation: 5
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    button :{
        backgroundColor: '#ffffff',
        color: '#000000',
        marginTop: 10,
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        elevation: 5,
        shadowOffset: {
            color: '#000000',
            width: 8
        }
    },
})