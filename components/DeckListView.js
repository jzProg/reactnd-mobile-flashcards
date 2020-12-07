import React, { Component } from 'react';
import { ScrollView , TouchableOpacity } from "react-native";
import { getDecks } from '../utils/storage';
import Deck from './Deck';

class DeckListView extends Component {

   state = {
     decks: {},
   }

   componentDidMount() {
     getDecks().then((decks) => {
           this.setState({ decks });
     });
   }

   onDeckPress = (deck) => {
     this.props.navigation.navigate('DeckView', { title: deck.title, cards: deck.cards });
   }

   render() {
     return (
       <ScrollView>
        { Object.values(this.state.decks).map(deck => <TouchableOpacity onPress={() => this.onDeckPress(deck)} key={deck.title} style={{ height: 200}}>
                                         <Deck title={deck.title} cards={deck.questions}/>
                                       </TouchableOpacity>)}
      </ScrollView >
     )
   }
}

export default DeckListView;
