import React, {Component} from 'react';
import {Alert} from 'react-native';
import {MyContainer} from './Componets/Container';
import {connect} from 'react-redux';
import {addElement} from '../../actions/arrayValue';
import {removeElement} from '../../actions/arrayValue';

var globalIndexVariable;

class To_Do_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      addActionValue: '',
    };
  }

  updateButtonPressed = updatingThisElement => {
    this.setState({
      textInputValue: updatingThisElement,
      addActionValue: updatingThisElement,
    });
    var myList = this.props.toDoList;
    var index = myList.indexOf(updatingThisElement);
    globalIndexVariable = index;
  };

  deleteButtonPressed = selectedElement => {
    this.props.removeElement(selectedElement);
  };

  addButtonAction = textFieldValue => {
    var myList = this.props.toDoList;
    if (textFieldValue === '') {
      if (this.state.textInputValue === '') {
        Alert.alert('Please Enter a Task');
      } else {
        var newTask = this.state.textInputValue;
        this.props.addElement(newTask);
        this.setState({
          textInputValue: '',
        });
      }
    } else if (textFieldValue !== '') {
      myList[globalIndexVariable] = this.state.textInputValue;
      this.setState({
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
        data={this.props.toDoList}
        extraData={this.state}
        myDeleteButton={item => this.deleteButtonPressed(item)}
        myUpdateButton={item => this.updateButtonPressed(item)}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addElement(value) {
      dispatch({
        type: 'ADD_BUTTON_ACTION',
        value,
      });
    },
    removeElement(value) {
      dispatch({
        type: 'DELETE_BUTTON_PRESSED',
        value,
      });
    },
  };
}

function mapStateToProps(state) {
  return {
    toDoList: state.todoReducer.toDoList,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(To_Do_List);
