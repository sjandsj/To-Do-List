import React, {Component} from 'react';
import To_Do_List from './app/Screens/InputScreen/index';

// const initialState = {
//   toDoList: [],
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_BUTTON_ACTION':
//       var myList = JSON.parse(JSON.stringify(state.toDoList));
//       myList.push(action.value);
//       return {
//         ...state,
//         toDoList: myList,
//       };
//     case 'DELETE_BUTTON_PRESSED':
//       var myList2 = JSON.parse(JSON.stringify(state.toDoList));
//       var index = myList2.indexOf(action.value);
//       myList2.splice(index, 1);
//       return {
//         ...state,
//         toDoList: myList2,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

export default class App extends Component {
  render() {
    return <To_Do_List />;
  }
}
