import React from 'react';

function Price({ list_price, final }) {
  return (
    <div>
      <p>{final}</p>
      <p>
        Save {list_price - final} {list_price}
      </p>
    </div>
  );
}

export default Price;
