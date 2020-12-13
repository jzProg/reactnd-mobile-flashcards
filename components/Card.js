import React from 'react';
import { View, Text, Button } from "react-native";
import { styles } from '../utils/styles';

function Card({ showAnswer, card, onFlip }) {
  return (
    <View style={{ alignItems: 'center'}}>
      <Text style={styles.title}>{ !showAnswer ? card.question : card.answer }</Text>
      <Button title={!showAnswer ? 'show answer' : 'show question'} onPress={onFlip}></Button>
    </View>
    )
}

export default Card;
