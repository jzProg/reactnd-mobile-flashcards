import React, { Component } from 'react';
import { View, Button, Text } from "react-native";
import Card from './Card';

class Quiz extends Component {

  state = {
    showAnswer: false,
    currentQuestion: 0
  }

  answer = (isCorrect) => {
    // TODO count score
    // TODO show next card
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ flex: 1, alignSelf: 'flex-start'}}>
          <Text style={{ width: 20, height: 20}}>1/2</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <Card showAnswer={this.state.showAnswer}/>
          <Button title="Correct" onPress={() => answer(true)}/>
          <Button title="Incorrect" onPress={() => answer(false)}/>
        </View>
     </View>
    )
  }
}

export default Quiz;
