import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';
import '@testing-library/jest-dom/extend-expect';

test('renders button with text', () => {
  let called = false;
  const onClick = () => {
    called = true
  }

  const { getByLabelText } = render(<Button onClick={onClick} type="submit">test</Button>);

  const button = getByLabelText('button');

  fireEvent.click(button);

  expect(called).toBeTruthy();
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('test');
  expect(button).toHaveAttribute('type', 'submit');
})