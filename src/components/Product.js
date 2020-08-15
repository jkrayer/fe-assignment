import React from 'react';
import styles from './Product.module.css';
import Placeholder from './Placeholder';
import Price from './Price';
import { truncate, debounce } from '../lib/';

const toSeven = x => truncate(7, x);

function Product({ product }) {
  const [windowWidth, seWindowWidth] = React.useState(0);
  const toSevenSmall = x => (windowWidth < 500 ? toSeven(x) : x);

  React.useLayoutEffect(() => {
    const updateSize = debounce(() => seWindowWidth(window.innerWidth));

    seWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const QuickShip = ( // !product.is_quick_ship ? null :
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
          {toSevenSmall(product.description)}
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
