import {createStore, combineReducers} from 'redux';
import todoReducer from './reducer/reducerFunction';

const rootReducer = combineReducers({
  todoReducer: todoReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
