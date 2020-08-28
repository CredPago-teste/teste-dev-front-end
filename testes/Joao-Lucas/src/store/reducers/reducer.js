import { combineReducers } from 'redux';

import { visits, visitModify, visitDelete } from './visits';
import { user } from './user';

const reducers = combineReducers({
  visits,
  visitModify,
  visitDelete,
  user
})

export default reducers;