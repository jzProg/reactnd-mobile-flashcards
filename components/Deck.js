import React from 'react';
import { View, Text, Animated } from "react-native";
import { styles } from '../utils/styles';

function Deck({ title, cards, font, selected }) {
  return (
      <View style={styles.centered}>
        <Animated.Text style={[styles.title, { fontSize: (font && title === selected) ? font : 20 }]}>
          {title}
        </Animated.Text>
        <Text style={styles.italic}>
          contains {cards.length} cards
        </Text>
      </View>
    )
}

export default Deck;
