import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from "react-native";
import { useIsFocused  } from '@react-navigation/native';
import { getDecks } from '../utils/storage';
import { styles } from '../utils/styles';
import Deck from './Deck';

class DeckListView extends Component {

   state = {
     decks: {},
   }

   componentDidMount() {
     this.props.navigation.addListener('focus', this.fetchInitialData);
     this.fetchInitialData();
   }

   fetchInitialData = () => {
     getDecks().then((decks) => {
        this.setState({ decks });
     });
   }

   onDeckPress = (deck) => {
     this.props.navigation.navigate('Deck', { deckId: deck.title });
   }

   render() {
     return (
       <ScrollView>
        { Object.values(this.state.decks).map(deck =>
             <TouchableOpacity onPress={() => this.onDeckPress(deck)}
                               key={deck.title}
                               style={[{ height: 200 }, styles.card]}>
                <Deck title={deck.title} cards={deck.questions}/>
             </TouchableOpacity>)}
      </ScrollView >
     )
   }
}

export default DeckListView;
