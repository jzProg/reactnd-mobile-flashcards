import React, { Component } from 'react';
import { View, Button, Text } from "react-native";
import { getDeck } from '../utils/storage';
import Card from './Card';

class Quiz extends Component {

  state = {
    showAnswer: false,
    currentQuestion: 0,
    score: 0,
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this.reset);
  }

  reset = () => {
    this.setState({
      showAnswer: false,
      currentQuestion: 0,
      score: 0
    });
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
    const { questions } = this.props.route.params;
    const { currentQuestion } = this.state;
    return currentQuestion + 1 === questions.length;
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
    const { title, questions } = this.props.route.params;
    this.props.navigation.navigate('Score', { score: this.state.score, ...{ title, questions } });
  }

  render() {
    const { currentQuestion, showAnswer } = this.state;
    const { questions = [] } = this.props.route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ flex: 1, alignSelf: 'flex-start'}}>
          <Text style={{ width: 20, height: 20}}>{currentQuestion + 1}/{questions.length}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <Card showAnswer={showAnswer} card={questions[currentQuestion] || []} onFlip={this.flip}/>
          <Button title="Correct" onPress={() => this.answer(true)}/>
          <Button title="Incorrect" onPress={() => this.answer(false)}/>
        </View>
     </View>
    )
  }
}

export default Quiz;
