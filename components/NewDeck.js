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
    const { title } = this.state;
    if (!title) return;
    saveDeckTitle(title).then(() => {
      this.setState({ title: ''});
      this.toHome(title);
    });
  }

  toHome = (title) => {
    this.props.navigation.navigate('Deck', { deckId: title });
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
