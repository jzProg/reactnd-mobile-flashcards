import React, { Component } from 'react';
import { View, Button, Text } from "react-native";
import Card from './Card';

class Quiz extends Component {

  state = {
    showAnswer: false,
    currentQuestion: 0,
    cards: [{ question: 'question1', answer: 'answer1'}, { question: 'question2', answer: 'answer2'}], // TODO asyncStorage
    score: 0,
  }

  updateScore = (isCorrect) => {
      const isLastRound = this.isLastRound();
      this.setState((state, props) => ({
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: !isLastRound ? state.currentQuestion + 1 : state.currentQuestion
      }), () => {
        if (isLastRound) {
          this.toScore();
        }
      });
  }

  isLastRound = () => {
    const { currentQuestion, cards } = this.state;
    return currentQuestion + 1 === cards.length;
  }

  answer = (isCorrect) => {
    this.updateScore(isCorrect);
  }

  flip = () => {
    this.setState((state, props) => ({
      showAnswer: !state.showAnswer
     }));
  }

  toScore = () => {
    this.props.navigation.navigate('Score', { score: this.state.score });
  }

  render() {
    const { currentQuestion, cards, showAnswer } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ flex: 1, alignSelf: 'flex-start'}}>
          <Text style={{ width: 20, height: 20}}>{currentQuestion + 1}/{cards.length}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <Card showAnswer={showAnswer} card={cards[currentQuestion]} onFlip={this.flip}/>
          <Button title="Correct" onPress={() => this.answer(true)}/>
          <Button title="Incorrect" onPress={() => this.answer(false)}/>
        </View>
     </View>
    )
  }
}

export default Quiz;
