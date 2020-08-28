import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';
import '@testing-library/jest-dom/extend-expect';
import store from '../../store/index';
import { Provider } from 'react-redux';

test('renders header', () => {
  const { getByAltText, getByText } = render(<Provider store={store}> <Header /> </Provider>);

  const image = getByAltText('Logo');
  const inicio = getByText('Início');

  expect(image).toBeInTheDocument();
  expect(inicio).toBeInTheDocument();
})