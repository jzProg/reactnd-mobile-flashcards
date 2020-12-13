import React, { Component } from 'react';
import { View } from "react-native";
import { saveDeckTitle } from '../utils/storage';
import Form from './Form';

class NewDeck extends Component {

  state = {
    inputs: [{ id: 'title', placeholder: 'deck title'}],
    title: '',
    submitText: 'Create Deck'
  }

  onChange = (id, text) => {
    this.setState({ [id]: text });
  }

  select = () => {
    saveDeckTitle(this.state.title).then(() => {
      this.toHome();
    });
  }

  toHome = () => {
    this.props.navigation.navigate('DeckView', { deckId: this.state.title });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Form inputs={this.state.inputs} submitText={this.state.submitText} onSubmit={this.select} onSelect={this.onChange}/>
      </View>
    )
  }
}

export default NewDeck;
