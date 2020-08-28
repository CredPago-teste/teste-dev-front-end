import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './index';
import '@testing-library/jest-dom/extend-expect';
require('mutationobserver-shim');
import { useForm } from 'react-hook-form';

// I needed to create another component, because of useForm and its register
const SetupInput = ({ onFocus }) => {
  const { register } = useForm();

  return <Input aria-label="input" name="input" onFocus={onFocus} register={register} required placeholder="placeholder" label="testLabel" />
}

test('renders input with attributes and focus', () => {
  let called = false;
  const onFocus = () => {
    called = true;
  }
  const { getByLabelText } = render(<SetupInput onFocus={onFocus} />);
  const input = getByLabelText('input');

  fireEvent.focus(input);

  expect(called).toBeTruthy();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('name', 'input');
  expect(input).toHaveAttribute('placeholder', 'placeholder');
})