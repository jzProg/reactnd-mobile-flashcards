import React from 'react';
import { View, TextInput, Button } from "react-native";
import { styles } from '../utils/styles';

function Form({ inputs, onSubmit, onSelect, submitText }) {
  return (
      <View style={{ margin: 30 }}>
        { inputs.map(input => <TextInput key={input.id}
                                         id={input.id}
                                         onChangeText={(text) => onSelect(input.id, text)}
                                         style={styles.input}
                                         placeholder={input.placeholder}/>)}
        <Button title={submitText} onPress={onSubmit}/>
      </View>
    )
}

export default Form;
