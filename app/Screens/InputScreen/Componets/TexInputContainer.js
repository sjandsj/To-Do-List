import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const TextInputContainer = props => {
  return (
    <View style={myStyle.viewForInput}>
      <TextInput
        style={myStyle.textInput}
        value={props.myValue}
        placeholder="Enter Your Task"
        onChangeText={props.onChangeText}
      />
      <TouchableOpacity style={myStyle.addButton} onPress={props.onPress}>
        <Text style={myStyle.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const myStyle = StyleSheet.create({
  viewForInput: {
    backgroundColor: 'orange',
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textInput: {
    width: '70%',
    backgroundColor: 'lavender',
    height: 50,
    borderRadius: 40,
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'steelblue',
    width: '20%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
});

export {TextInputContainer};
