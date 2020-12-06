import React from 'react';
import { View, Button, Text } from "react-native";
import Deck from './Deck';

function DeckView({ route, navigation }) {

  const { title, cards } = route.params;

  function onAdd() {
    navigation.navigate('NewQuestion');
  }

  function onPlay() {
    navigation.navigate('Quiz');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
     <Deck title={title} cards={cards}/>
     <Button title="Add New Card" onPress={onAdd}/>
     <Button title="Start Quiz" onPress={onPlay}/>
    </View>
  )
}

export default DeckView;
