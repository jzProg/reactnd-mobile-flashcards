import React, { Component } from 'react';
import { View, Text } from "react-native";
import { saveDeckTitle } from '../utils/storage';
import { styles } from '../utils/styles';
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
    this.props.navigation.navigate('Deck', { deckId: this.state.title });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.title}>Insert new deck's title</Text>
        <Form inputs={this.state.inputs} submitText={this.state.submitText} onSubmit={this.select} onSelect={this.onChange}/>
      </View>
    )
  }
}

export default NewDeck;
