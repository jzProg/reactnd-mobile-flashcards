import React, { Component } from 'react';
import { View, Text } from "react-native";

class NewDeck extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <Text>
          New deck
        </Text>
     </View>
    )
  }
}

export default NewDeck;
