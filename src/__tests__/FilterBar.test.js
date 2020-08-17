import React from 'react';
import { render } from '@testing-library/react';
import FilterBar from '../components/FilterBar';

describe('conditionally shows quickShip', () => {
  test('conditionally shows quickShip', () => {
    const { getByTestId } = render(<FilterBar types={[]} quickShip={false} />);

    expect(() => getByTestId('qs-fieldset')).toThrow();
  });

  test('conditionally shows quickShip', () => {
    const { getByTestId } = render(<FilterBar types={[]} quickShip={true} />);

    expect(!!getByTestId('qs-fieldset')).toBe(true);
  });
});
