import React from 'react';
import { View, Text } from "react-native";
import { styles } from '../utils/styles';

function Deck({ title, cards }) {
  return (
      <View style={styles.centered}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.italic}>
          contains {cards.length} cards
        </Text>
      </View>
    )
}

export default Deck;
