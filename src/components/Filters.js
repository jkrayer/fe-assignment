import React from 'react';
import FilterModal from './FilterModal';
import FilterBar from './FilterBar';

function Filters({ types, which, shipping }) {
  if (which < 945) {
    return <FilterModal types={types} quickShip={shipping} />;
  } else {
    return <FilterBar types={types} quickShip={shipping} />;
  }
}

export default Filters;
