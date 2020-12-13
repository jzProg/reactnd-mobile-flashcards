import React, { Component } from 'react';
import { SafeAreaView , Button, Text } from "react-native";
import { getDeck, deleteDeck } from '../utils/storage';
import Deck from './Deck';

class DeckView extends Component {

  state = {
    deck: {}
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this.fetchDeck);
    this.fetchDeck();
  }

  fetchDeck = () => {
    const { deckId } = this.props.route.params;
    getDeck(deckId).then((deck) => {
       this.setState({ deck });
    });
  }

  onAdd = () => {
    const { deckId } = this.props.route.params;
    this.props.navigation.navigate('New Question', { deckId });
  }

  onPlay = () => {
    const { deck } = this.state;
    this.props.navigation.navigate('Quiz', deck);
  }

  removeDeck = () => {
    const { deckId } = this.props.route.params;
    deleteDeck(deckId).then((deck) => {
       this.props.navigation.navigate('Deck List', deck);
    });
  }

  render() {
    const { title, questions = [] } = this.state.deck;

    return (
      <SafeAreaView  style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Deck title={title} cards={questions}/>
        <Button title="Add New Card" onPress={this.onAdd}/>
        <Button title="Start Quiz" onPress={this.onPlay}/>
        <Button color='red' title="Delete Deck" onPress={this.removeDeck}/>
      </SafeAreaView>
    )
  }
}

export default DeckView;
