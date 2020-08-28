import { defineState } from 'redux-localstore';

const defaultState = {}

const initialState = defineState(defaultState)('user')

function user(state = initialState, action) {
  switch(action.type) {
    case 'ADD_USER':
      return action.payload;
    default:
      return state;
  }
}

export { user };