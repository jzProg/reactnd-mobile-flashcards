import React, { Component } from 'react';
import { ScrollView , TouchableOpacity } from "react-native";
import Deck from './Deck';

class DeckListView extends Component {
   state ={
     decks: [{ title: 'deck1', cards: '3'}, { title: 'deck2', cards: '0'}, { title: 'deck3', cards: '2'}, { title: 'deck4', cards: '2'}, { title: 'deck5', cards: '2'}]
   }

   onDeckPress = (deck) => {
     this.props.navigation.navigate('DeckView', { title: deck.title, cards: deck.cards });
   }

   render() {
     return (
       <ScrollView>
        { this.state.decks.map(deck => <TouchableOpacity onPress={() => this.onDeckPress(deck)} key={deck.title} style={{ height: 200}}>
                                         <Deck title={deck.title} cards={deck.cards}/>
                                       </TouchableOpacity>)}
      </ScrollView >
     )
   }
}

export default DeckListView;
