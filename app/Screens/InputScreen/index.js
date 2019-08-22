import React, {Component} from 'react';
import {Alert} from 'react-native';
import {MyContainer} from './Componets/Container';

export default class To_Do_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      toDoList: [],
    };
  }

  deleteButtonPressed = selectedElement => {
    var myList = this.state.toDoList;
    var index = myList.indexOf(selectedElement);
    myList.splice(index, 1);
    this.setState({
      toDoList: myList,
    });
  };

  addButtonAction = () => {
    if (this.state.textInputValue === '') {
      Alert.alert('Please Enter a Task');
    } else {
      var newTask = this.state.textInputValue;
      var myList = this.state.toDoList;
      myList.push(newTask);
      this.setState({
        toDoList: myList,
      });
      this.setState({
        textInputValue: '',
      });
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
        myAddButton={this.addButtonAction}
        data={this.state.toDoList}
        extraData={this.state}
        keyExtractor={(item, index) => index}
        myDeleteButton={item => this.deleteButtonPressed(item)}
      />
    );
  }
}
