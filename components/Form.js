import React, { Component } from 'react';
import { View, TextInput, Button } from "react-native";

class Form extends Component {

  state = {
    input: 'new deck title'
  }

  onChangeText = (text) => {
    this.setState({ input: text });
  }

  onSubmit = () => {
    this.props.onSelect(this.state.input);
  }

  render() {
    return (
      <View>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                   value={this.state.input}
                   onChangeText={text => this.onChangeText(text)}/>
        <Button title="Submit" onPress={this.onSubmit}/>
      </View>
      )
  }
}

export default Form;
