import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

export default class To_Do_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      toDoList: [],
    };
  }

  deleteButtonPressed = someValue => {
    Alert.alert(someValue);
  };

  addButtonAction = () => {
    if (this.state.textInputValue === '') {
      Alert.alert('Please Enter a Value');
    } else {
      var newTask = this.state.textInputValue;
      var myList = this.state.toDoList;
      myList.push(newTask);
      this.setState({
        toDoList: myList,
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
      <View style={myStyle.mainContainer}>
        <View style={myStyle.viewForInput}>
          <TextInput
            style={myStyle.textInput}
            value={this.state.textInputValue}
            placeholder="Enter Your Task"
            onChangeText={value => this.onChangeTextFunction(value)}
          />
          <TouchableOpacity
            style={myStyle.addButton}
            onPress={this.addButtonAction}>
            <Text style={myStyle.addButtonText}>ADD</Text>
          </TouchableOpacity>
        </View>
        <View style={myStyle.viewForList}>
          <FlatList
            data={this.state.toDoList}
            extraData={this.state}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => {
              return (
                <View style={myStyle.listView}>
                  <Text style={myStyle.listItemStyle}>{item}</Text>
                  <TouchableOpacity
                    style={myStyle.deleteButton}
                    onPress={() => this.deleteButtonPressed(item)}>
                    <Text style={myStyle.deleteButtonText}>DELETE</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const myStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewForInput: {
    backgroundColor: 'orange',
    flex: 2,
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  viewForList: {
    flex: 4,
    backgroundColor: 'lightseagreen',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    width: '70%',
    backgroundColor: 'lavender',
    height: 40,
    borderRadius: 40,
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 25,
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
  listView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemStyle: {
    fontFamily: 'Times New Roman',
    fontSize: 30,
    fontWeight: '500',
    width: '70%',
  },
  deleteButton: {
    backgroundColor: 'orange',
    borderRadius: 35,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'black',
    fontSize: 25,
  },
});
