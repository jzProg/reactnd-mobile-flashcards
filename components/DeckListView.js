import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text, View, Animated } from "react-native";
import { useIsFocused  } from '@react-navigation/native';
import { getDecks } from '../utils/storage';
import { styles } from '../utils/styles';
import Deck from './Deck';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

class DeckListView extends Component {

   state = {
     decks: {},
     fontSize: new Animated.Value(20),
     selected: ''
   }

   componentDidMount() {
     this.props.navigation.addListener('focus', this.fetchInitialData);
     this.fetchInitialData();
   }

   fetchInitialData = () => {
     getDecks().then((decks) => {
        this.setState({ decks, selected: '' });
     });
   }

   onDeckPress = (deck) => {
     this.setState({ selected: deck.title });
     Animated.spring(this.state.fontSize, { toValue: 40, speed: 5, useNativeDriver: false }).start();
     this.props.navigation.navigate('Deck', { deckId: deck.title });
   }

   render() {
     const { decks, fontSize, selected } = this.state;
     const deckArray = Object.values(decks);
     
     return (
       !deckArray.length ? (
         <View style={styles.centered}>
           <Text>No available decks...</Text>
         </View>
        ) : (
         <ScrollView>
          { Object.values(this.state.decks).map(deck =>
               <TouchableOpacity onPress={() => this.onDeckPress(deck)}
                                 key={deck.title}
                                 style={[{ height: 200 }, styles.card]}>
                  <Deck title={deck.title} cards={deck.questions} font={fontSize} selected={selected}/>
               </TouchableOpacity>)}
        </ScrollView>
       )
      )
   }
}

export default DeckListView;
