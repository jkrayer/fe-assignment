import React from 'react';
import FilterModal from './FilterModal';
import FilterBar from './FilterBar';

function Filters({ types, which }) {
  if (which < 945) {
    return <FilterModal types={types} />;
  } else {
    return <FilterBar types={types} />;
  }
}

export default Filters;
