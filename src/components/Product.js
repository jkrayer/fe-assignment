import React from 'react';
import Price from './Price';

function Product({ product }) {
  console.log('qs', product.is_quick_ship);
  const QuickShip = product.is_quick_ship ? <p>QuickShip?</p> : null;

  return (
    <div>
      <figure>Image</figure>
      <p>11 {product.items[0]['~product_type']}</p>
      <p>
        {product.brand} {product.series} {product.description}
      </p>
      {QuickShip}
      <Price {...product.prices} />
      <a href={product.url}>ViewPackage</a>
    </div>
  );
}

export default Product;
