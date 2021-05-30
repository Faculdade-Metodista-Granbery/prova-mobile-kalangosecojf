import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';
import CardQuote from './components/card/card.component';
import { themeKalango,themeOriginal } from './utils/colors';

import firebase from './services/firebase'
import { useList } from 'react-firebase-hooks/database';

export default function App() {

  const [cards, load, error] = useList (firebase.getAll())

  console.log(cards)

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor = {themeKalango.button}
       />
      <FlatList
      /**
        data={notList}
        keyExtractor={item=>item.id}
        renderItem={({item}) =>
          <CardQuote key={item.id}
            task={item.task}
            background={item.background}
          />
          }
          */
        /**/
        data={cards}
        keyExtractor={item=>item.id}
        renderItem={({item}) =>
          <CardQuote 
            key={item.val().id}
            task={item.val().task}
            background={item.val().background}
          />
          }
        /**/
       >
      </FlatList>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeKalango.backgraund,
    alignItems: 'center',
    justifyContent: 'center',
  }
});