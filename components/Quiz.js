import React, { Component } from 'react';
import { View, Button, Text } from "react-native";
import Card from './Card';

class Quiz extends Component {

  state = {
    showAnswer: false,
    currentQuestion: 0,
    cards: [{ question: 'question1', answer: 'answer1'}, { question: 'question2', answer: 'answer2'}]
  }

  answer = (isCorrect) => {
    // TODO count score
    if (this.state.currentQuestion + 1 < this.state.cards.length) {
      this.setState((state, props) => ({
        currentQuestion: state.currentQuestion + 1
       }));
    } else {
      this.toScore();
    }
  }

  flip = () => {
    this.setState((state, props) => ({
      showAnswer: !state.showAnswer
     }));
  }

  toScore = () => {
    this.props.navigation.navigate('Score'); // TODO new values
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ flex: 1, alignSelf: 'flex-start'}}>
          <Text style={{ width: 20, height: 20}}>{this.state.currentQuestion + 1}/{this.state.cards.length}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <Card showAnswer={this.state.showAnswer} card={this.state.cards[this.state.currentQuestion]} onFlip={this.flip}/>
          <Button title="Correct" onPress={() => this.answer(true)}/>
          <Button title="Incorrect" onPress={() => this.answer(false)}/>
        </View>
     </View>
    )
  }
}

export default Quiz;
