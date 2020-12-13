import React from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { View, TouchableOpacity, Text, Button } from "react-native";
import { styles } from '../utils/styles';

function Score({ route, navigation }) {

  function back() {
    navigation.navigate('Deck');
  }

  function restart() {
    const { title, questions } = route.params;
    navigation.replace('Quiz', { title, questions });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FontAwesome name='star' size={60} color={'red'} />
      <Text style={styles.title}>Score: {route.params.score}</Text>
      <TouchableOpacity style={styles.correctButton} onPress={restart}>
        <Text style={{ color: 'white'}}>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.incorrectButton} onPress={back}>
        <Text style={{ color: 'white'}}>Back to Deck</Text>
      </TouchableOpacity>
    </View>
    )
}

export default Score;
