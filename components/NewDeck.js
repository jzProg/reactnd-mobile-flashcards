import React, { Component } from 'react';
import { View } from "react-native";
import Form from './Form';

class NewDeck extends Component {

  select = () => {

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
