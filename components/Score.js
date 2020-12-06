import React from 'react';
import { View, Text } from "react-native";

function Score({ route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Score: {route.params.score}</Text>
    </View>
    )
}

export default Score;
