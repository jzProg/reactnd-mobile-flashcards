import React, { Component } from 'react';
import { View } from "react-native";
import Form from './Form';

class NewQuestion extends Component {

  state = {
    inputs: [{ id: 'q_title', placeholder: 'question title'}, { id: 'q_answer', placeholder: 'question answer'}],
    q_title: '',
    q_answer: ''
  }

  onChange = (id, text) => {
    this.setState({ [id]: text });
  }

  select = () => {
    // TODO store new card
    this.toHome();
  }

  toHome = () => {
    this.props.navigation.navigate('DeckView'); // TODO new values
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Form inputs={this.state.inputs} onSubmit={this.select} onSelect={this.onChange}/>
     </View>
    )
  }
}

export default NewQuestion;
