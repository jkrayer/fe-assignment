import React from 'react';
import { render } from '@testing-library/react';
import Filters from '../components/Filters';

test('renders filter modal', () => {
  const { getByTestId } = render(<Filters types={[]} which={900} />);
  const modal = getByTestId('modal-button');

  expect(!!modal).toBe(true);
  expect(() => getByTestId('bar')).toThrow();
});

test('renders filter modal', () => {
  const { getByTestId } = render(<Filters types={[]} which={2000} />);
  const bar = getByTestId('bar');

  expect(!!bar).toBe(true);
  expect(() => getByTestId('modal-button')).toThrow();
});
