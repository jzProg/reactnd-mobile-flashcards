import React, { Component } from 'react';
import { View, Text } from "react-native";
import { addCardToDeck } from '../utils/storage';
import { styles } from '../utils/styles';
import Form from './Form';

class NewQuestion extends Component {

  state = {
    inputs: [{ id: 'q_title', placeholder: 'question title'}, { id: 'q_answer', placeholder: 'question answer'}],
    q_title: '',
    q_answer: '',
    submitText: 'Submit'
  }

  onChange = (id, text) => {
    this.setState({ [id]: text });
  }

  select = () => {
    const { deckId } = this.props.route.params;
    const { q_title, q_answer } = this.state;
    if (!q_title || !q_answer) return;
    addCardToDeck(deckId, { question: q_title, answer: q_answer }).then(() => {
      this.toHome();
    });
  }

  toHome = () => {
    const { deckId } = this.props.route.params;
    this.props.navigation.navigate('Deck', { deckId });
  }

  render() {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>Insert new card's details</Text>
        <Form inputs={this.state.inputs} submitText={this.state.submitText} onSubmit={this.select} onSelect={this.onChange}/>
     </View>
    )
  }
}

export default NewQuestion;
