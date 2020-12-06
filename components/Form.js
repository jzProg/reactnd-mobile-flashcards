import React from 'react';
import { View, TextInput, Button } from "react-native";

function Form({ inputs, onSubmit, onSelect }) {
  return (
      <View>
        { inputs.map(input => <TextInput key={input.id}
                                         id={input.id}
                                         onChangeText={(text) => onSelect(input.id, text)}
                                         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                         placeholder={input.placeholder}/>)}
        <Button title="Submit" onPress={onSubmit}/>
      </View>
    )
}

export default Form;
