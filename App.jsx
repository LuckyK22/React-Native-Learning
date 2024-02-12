import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/Cards/FlatCards'
import HorizontalCard from './components/Cards/HorizontalCard'
import ImageCard from './components/Cards/ImageCard'
import ContactList from './components/Cards/ContactList'
import PasswordGen from './components/Cards/PasswordGen'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatCards /> */}
        <HorizontalCard />
        <ContactList />
        <PasswordGen />
        <ImageCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App