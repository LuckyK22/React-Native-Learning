import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style } from "../Styling/Style"

const Contacts = [
    {
        uid: 1,
        image: 'http://m.gettywallpapers.com/wp-content/uploads/2023/05/Naruto-Pfp-for-Profile-Picture.jpg',
        name: 'Naruto Uzumaki ❤️',
        anime: "Naruto"
    },
    {
        uid: 2,
        image: 'https://wallpapers.com/images/high/cute-fan-art-of-gojo-satoru-lu056h59wm008uee.webp',
        name: 'Gojo Satoru 🥱',
        anime: 'Jujutsu Kaisen',
    },
    {
        uid: 3,
        image: 'http://m.gettywallpapers.com/wp-content/uploads/2023/07/Eren-Yeager-Avatar.jpg',
        name: 'Eren Jaeger 🤯',
        anime: 'Attack on Titan',
    },
    {
        uid: 4,
        image: 'https://e1.pxfuel.com/desktop-wallpaper/876/57/desktop-wallpaper-anime-icons-cute-deku-pfp-thumbnail.jpg',
        name: 'Izuku Midoriya 😵‍💫',
        anime: 'My Hero Academia',
    },
    {
        uid: 5,
        image: 'https://wallpapers.com/images/high/dr-stone-pictures-0qar4tc9fjtmquij.webp',
        name: 'Senku Ishigami 😯',
        anime: 'Dr. Stone',
    },
    {
        uid: 6,
        image: 'https://avatarfiles.alphacoders.com/326/326938.png',
        name: 'Asta Staria 👹',
        anime: 'Black Clover',
    },
]

export default function ContactList() {
    return (
        <View style={style.container}>
                <Text style={style.heading}>ContactList</Text>
            <View style={styles.parentContainer}>
                <View>
                    {
                        Contacts.map(({ uid, image, name, anime }) => (
                            <View style={styles.contacts} key={uid}>
                                <Image
                                    source={{
                                        uri: image
                                    }}
                                    style={styles.contactImage}
                                />
                                <View>
                                    <Text style={styles.name}>{name}</Text>
                                    <Text>{anime}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
        marginTop: 10
    },
    contacts: {
        flex: 1,
        flexDirection: 'row',
        gap: 15,
        elevation: 4,
        shadowOffset: {
            width: 5
        },
        marginBottom: 15
    },
    contactImage: {
        width: 50,
        height: 50,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#2A3B5C',
    },
    name: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: '700'
    },
})