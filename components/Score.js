import React from 'react';
import { View, Text, Button } from "react-native";

function Score({ route, navigation }) {

  function toHome() {
    navigation.navigate('DeckListView');
  }

  function restart() {
    const { title, questions } = route.params;
    navigation.replace('Quiz', { title, questions });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Score: {route.params.score}</Text>
      <Button title="Restart Quiz" onPress={restart}/>
      <Button title="to Home" onPress={toHome}/>
    </View>
    )
}

export default Score;
