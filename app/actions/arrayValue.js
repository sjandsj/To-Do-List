import {DELETE_BUTTON_PRESSED} from './type';
import {ADD_BUTTON_ACTION} from './type';

export const addElement = aelement => {
  return {
    type: ADD_BUTTON_ACTION,
    value: aelement,
  };
};

export const removeElement = relement => {
  return {
    type: DELETE_BUTTON_PRESSED,
    value: relement,
  };
};
