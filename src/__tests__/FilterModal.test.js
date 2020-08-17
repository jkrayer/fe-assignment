import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterModal from '../components/FilterModal';

test('toggles form modal', () => {
  const { getByTestId } = render(<FilterModal types={[]} quickShip={false} />);

  fireEvent.click(getByTestId('modal-button'));

  const form = getByTestId('modal-form');

  expect(!!form).toBe(true);
});

describe('conditionally shows quickShip', () => {
  test('conditionally shows quickShip', () => {
    const { getByTestId } = render(
      <FilterModal types={[]} quickShip={false} />
    );

    fireEvent.click(getByTestId('modal-button'));

    expect(() => getByTestId('qs-fieldset')).toThrow();
  });

  test('conditionally shows quickShip', () => {
    const { getByTestId } = render(<FilterModal types={[]} quickShip={true} />);

    fireEvent.click(getByTestId('modal-button'));

    expect(!!getByTestId('qs-fieldset')).toBe(true);
  });
});
