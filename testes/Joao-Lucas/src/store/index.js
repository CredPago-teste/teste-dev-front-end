import { createStore } from 'redux';
import storeSynchronize from 'redux-localstore';

import reducers from './reducers/reducer.js';

const store = createStore(reducers);

storeSynchronize(store);

export default store;