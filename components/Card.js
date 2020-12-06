import React from 'react';
import { View, Text, Button } from "react-native";

function Card({ showAnswer, card, onFlip }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <Text>{ !showAnswer ? card.question : card.answer }</Text>
      <Button title={!showAnswer ? 'showAnswer' : 'showQuestion'} onPress={onFlip}></Button>
    </View>
    )
}

export default Card;
