import React, { Component } from 'react';
import { View } from "react-native";
import { saveDeckTitle } from '../utils/storage';
import Form from './Form';

class NewDeck extends Component {

  state = {
    inputs: [{ id: 'title', placeholder: 'deck title'}],
    title: ''
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
    this.props.navigation.navigate('DeckListView');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Form inputs={this.state.inputs} onSubmit={this.select} onSelect={this.onChange}/>
      </View>
    )
  }
}

export default NewDeck;
