import React, { Component } from 'react';
import { View, Text } from "react-native";
import { saveDeckTitle } from '../utils/storage';
import { styles } from '../utils/styles';
import Form from './Form';

class NewDeck extends Component {

  state = {
    inputs: [{ id: 'title', placeholder: 'deck title'}],
    title: '',
    submitText: 'Create Deck',
    error: false,
  }

  onChange = (id, text) => {
    this.setState({ [id]: text });
  }

  select = () => {
    const { title } = this.state;
    if (!title) {
      this.setState({ error: true });
      return;
    }
    saveDeckTitle(title).then(() => {
      this.setState({ title: ''});
      this.toHome(title);
    });
  }

  toHome = (title) => {
    this.props.navigation.navigate('Deck', { deckId: title });
  }

  render() {
    const { inputs, submitText, error } = this.state;

    return (
      <View style={styles.centered}>
        <Text style={styles.title}>Insert new deck's title</Text>
        <Form inputs={inputs} submitText={submitText} onSubmit={this.select} onSelect={this.onChange}/>
        { error && (<Text style={styles.errorText}>Title cannot be empty...</Text>) }
      </View>
    )
  }
}

export default NewDeck;
