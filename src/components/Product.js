import React from 'react';
import styles from './Product.module.css';
import Placeholder from './Placeholder';
import Price from './Price';

function Product({ product, truncate }) {
  const QuickShip = !product.is_quick_ship ? null : (
    <img
      src="quickship-pdp.png"
      width="79"
      height="19"
      alt="Quick Ship"
      className={styles.qs}
    />
  );

  return (
    <div className={styles.product}>
      <div className={styles.col}>
        <Placeholder className={styles.col} />
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
          <b>
            {product.brand} {product.series}
          </b>{' '}
          {truncate(product.description)}
        </p>
        {QuickShip}
        <Price {...product.prices} />
        <a className={styles.viewbutton} href={product.url}>
          ViewPackage
        </a>
      </div>
    </div>
  );
}

export default Product;
