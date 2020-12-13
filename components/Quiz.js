import React, { Component } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { scheduleNextNotification, clearTodayNotification } from '../utils/notifications';
import { getDeck } from '../utils/storage';
import { styles } from '../utils/styles';
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
        currentQuestion: !isLastRound ? state.currentQuestion + 1 : state.currentQuestion,
        showAnswer: false
      }), () => {
        if (isLastRound) {
          clearTodayNotification().then(scheduleNextNotification);
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
      !questions.length ? (
        <View style={styles.centered}>
          <Text>No questions to play...</Text>
        </View>
      ) : (
        <SafeAreaView style={styles.centered}>
          <View style={{ flex: 1, alignSelf: 'flex-start'}}>
            <Text style={{ width: 30, height: 30}}>{currentQuestion + 1}/{questions.length}</Text>
          </View>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-start'}}>
            <Card showAnswer={showAnswer} card={questions[currentQuestion] || []} onFlip={this.flip}/>
            <TouchableOpacity style={styles.correctButton} onPress={() => this.answer(true)}>
              <Text style={{ color: 'white'}}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.incorrectButton} onPress={() => this.answer(false)}>
              <Text style={{ color: 'white'}}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )
    )
  }
}

export default Quiz;
