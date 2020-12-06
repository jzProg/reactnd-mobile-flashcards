import React from 'react';
import { View, Text } from "react-native";

function Card({ showAnswer }) {
  return (
    <View>
      <Text>Card</Text>
      <Text>{ showAnswer ? 'back' : 'front' }</Text>
    </View>
    )
}

export default Card;
