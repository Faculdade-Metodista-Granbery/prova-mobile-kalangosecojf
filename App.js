import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';
import CardQuote from './components/card/card.component';
import { themeKalango,themeOriginal } from './utils/colors';

import firebase from './services/firebase'
import { useList } from 'react-firebase-hooks/database';

export default function App() {

  //Theme Original
  //const [nameTheme, setNameTheme] = useState(null);  
  //Theme Kalango
  const [nameTheme, setNameTheme] = useState("kalango");

  const [cards, load, error] = useList (firebase.getAll())

  console.log(cards)


  return (
  
    <SafeAreaView style={nameTheme ? styles.containerKalango : styles.containerOriginal}
      >
      <StatusBar
        animated={true}
        backgroundColor = {nameTheme ? themeKalango.button : themeOriginal.button}
       />
      <FlatList
        data={cards}
        keyExtractor={item=>item.id}
        renderItem={({item}) =>
          <CardQuote 
            key={item.val().id}
            task={item.val().task}
            background={item.val().background}
          />
          }
       >
      </FlatList>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerOriginal: {
    flex: 1,
    backgroundColor: themeOriginal.backgraund,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerKalango: {
    flex: 1,
    backgroundColor: themeKalango.backgraund,
    alignItems: 'center',
    justifyContent: 'center',
  }

});