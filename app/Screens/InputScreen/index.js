import React, {Component} from 'react';
import {Alert} from 'react-native';
import {MyContainer} from './Componets/Container';
//import console = require('console');

var globalIndexVariable;

export default class To_Do_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      toDoList: [],
      addActionValue: '',
    };
  }

  updateButtonPressed = updatingThisElement => {
    this.setState({
      textInputValue: updatingThisElement,
      addActionValue: updatingThisElement,
    });
    var myList = this.state.toDoList;
    var index = myList.indexOf(updatingThisElement);
    globalIndexVariable = index;
  };

  deleteButtonPressed = selectedElement => {
    var myList = this.state.toDoList;
    var index = myList.indexOf(selectedElement);
    myList.splice(index, 1);
    this.setState({
      toDoList: myList,
    });
  };

  addButtonAction = textFieldValue => {
    var myList = this.state.toDoList;
    if (textFieldValue === '') {
      if (this.state.textInputValue === '') {
        Alert.alert('Please Enter a Task');
      } else {
        var newTask = this.state.textInputValue;
        myList.push(newTask);
        this.setState({
          toDoList: myList,
          textInputValue: '',
        });
      }
    } else if (textFieldValue !== '') {
      myList[globalIndexVariable] = this.state.textInputValue;
      this.setState({
        toDoList: myList,
        textInputValue: '',
        addActionValue: '',
      });
      return;
    } else {
      Alert.alert('Somthing went Wrong, Restart Your App');
    }
  };

  onChangeTextFunction = value => {
    this.setState({
      textInputValue: value,
    });
  };

  render() {
    return (
      <MyContainer
        myValue={this.state.textInputValue}
        onChangeText={value => this.onChangeTextFunction(value)}
        myAddButton={() => this.addButtonAction(this.state.addActionValue)}
        data={this.state.toDoList}
        extraData={this.state}
        keyExtractor={(item, index) => index}
        myDeleteButton={item => this.deleteButtonPressed(item)}
        myUpdateButton={item => this.updateButtonPressed(item)}
      />
    );
  }
}
