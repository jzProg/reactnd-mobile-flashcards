import React, { Component } from 'react';
import { View, Text } from "react-native";
import Deck from './Deck';

class DeckListView extends Component {
   state ={
     decks: [{ title: 'deck1', card: '3'}, { title: 'deck2', card: '0'}, { title: 'deck3', card: '2'}]
   }

   render() {
     return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        { this.state.decks.map(deck => <Deck title={deck.title} cards={deck.cards}></Deck>)}
      </View>
     )
   }
}

export default DeckListView;
