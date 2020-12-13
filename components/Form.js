import React from 'react';
import { View, TextInput, Button } from "react-native";
import { styles } from '../utils/styles';

function Form({ inputs, onSubmit, onSelect, submitText }) {
  let inputValue = '';

  function submit() {
    inputValue.setNativeProps({ text: '' });
    onSubmit();
  }

  return (
      <View style={{ margin: 30 }}>
        { inputs.map(input => <TextInput key={input.id}
                                         ref={element => inputValue = element}
                                         id={input.id}
                                         onChangeText={(text) => onSelect(input.id, text)}
                                         style={styles.input}
                                         placeholder={input.placeholder}/>)}
        <Button title={submitText} onPress={submit}/>
      </View>
    )
}

export default Form;
