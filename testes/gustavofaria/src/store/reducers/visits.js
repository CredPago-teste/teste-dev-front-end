import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const MOCK_DATA = [
  {
    id: uuidv4(),
    date: '2020-08-22',
    hour: '11:00',
    name: 'Samuel Silva',
    propertyId: '1235838',
    address: 'Rua Sombrio',
    number: '123',
  },
  {
    id: uuidv4(),
    date: '2020-08-22',
    hour: '14:00',
    name: 'José Soares',
    propertyId: '1321',
    address: 'Rua Jaraguá',
    number: '55',
  },
  {
    id: uuidv4(),
    date: '2020-08-22',
    hour: '16:00',
    name: 'Augusto Lima',
    propertyId: '119979556',
    address: 'Rua Joinville',
    number: '3812',
  },
  {
    id: uuidv4(),
    date: '2020-08-22',
    hour: '17:30',
    name: 'Pedro Faria',
    propertyId: '119264412',
    address: 'Rua Blumenau',
    number: '420',
  },
  {
    id: uuidv4(),
    date: '2020-08-23',
    hour: '10:00',
    name: 'Gilberto Figueiredo',
    propertyId: '2155542',
    address: 'Rua Santa Catarina',
    number: '3200',
  },
];

// window.localStorage.removeItem('visits');

const PERSISTENT_DATA = JSON.parse(window.localStorage.getItem('visits')) || MOCK_DATA;
const INITIAL_STATE = PERSISTENT_DATA;

const searchVisit = (state, id) => {
  const result = state.map((visit, index) => (visit.id === id ? index : false));
  const index = result.filter((visitIndex) => visitIndex !== false)[0];
  return index;
};

const editVisit = (state, newVisit) => {
  const index = searchVisit(state, newVisit.id);
  const newState = state;
  newState[index] = newVisit;
  return newState;
};

const deleteVisit = (state, id) => {
  const index = searchVisit(state, id);
  const newState = state;
  newState.splice(index, 1);
  return newState;
};

const sortByDate = (state) => {
  const newState = state.sort((vistA, visitB) => {
    const a = moment(`${vistA.date}T${vistA.hour}:00Z`);
    const b = moment(`${visitB.date}T${visitB.hour}:00Z`);
    return a.subtract(b);
  });
  return newState;
};

export default (state = INITIAL_STATE, action) => {
  let newState = state;
  switch (action.type) {
    case 'ADD_VISIT':
      newState = [...state, action.visit];
      window.localStorage.setItem('visits', JSON.stringify(newState));
      return newState;

    case 'EDIT_VISIT':
      newState = editVisit(state, action.newVisit);
      window.localStorage.setItem('visits', JSON.stringify(newState));
      return newState;

    case 'DELETE_VISIT':
      newState = deleteVisit(state, action.id);
      window.localStorage.setItem('visits', JSON.stringify(newState));
      return newState;

    default: return sortByDate(state);
  }
};
