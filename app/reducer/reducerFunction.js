import {ADD_BUTTON_ACTION} from '../actions/type';
import {DELETE_BUTTON_PRESSED} from '../actions/type';

const initialState = {
  toDoList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BUTTON_ACTION':
      var myList = JSON.parse(JSON.stringify(state.toDoList));
      myList.push(action.value);
      return {
        ...state,
        toDoList: myList,
      };
    case 'DELETE_BUTTON_PRESSED':
      var myList2 = JSON.parse(JSON.stringify(state.toDoList));
      var index = myList2.indexOf(action.value);
      myList2.splice(index, 1);
      return {
        ...state,
        toDoList: myList2,
      };
    default:
      return state;
  }
};

export default reducer;
