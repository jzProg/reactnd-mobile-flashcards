import React, { Component } from 'react';
import { View } from "react-native";
import Form from './Form';

class NewDeck extends Component {

  select = (title) => {
    // TODO store new deck
    this.toHome();
  }

  toHome = () => {
    this.props.navigation.navigate('Decks');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Form onSelect={this.select}/>
     </View>
    )
  }
}

export default NewDeck;
