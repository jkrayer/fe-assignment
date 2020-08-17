import React from 'react';
import fetch from 'cross-fetch';
import Filters from './Filters';
import Product from './Product';
import styles from './App.module.css';
import { truncate, debounce } from '../lib/';

const toSeven = x => truncate(7, x);
const count = 12;

function p(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(val), 3000);
  });
}

function any(products) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].is_quick_ship) return true;
  }

  return false;
}

function App() {
  const [products, setProducts] = React.useState([]);
  const [visibleProducts, setVisibleProducts] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [windowWidth, seWindowWidth] = React.useState(0);
  const [startIndex, setStartIndex] = React.useState(12);
  const [loading, setLoading] = React.useState(false);
  const [hasQuickship, setHasQuickship] = React.useState(false);

  const toSevenSmall = x => (windowWidth < 400 ? toSeven(x) : x);

  const handleShowMore = () => {
    const nextIndex = startIndex + count;
    const more = products.slice(startIndex, nextIndex);

    setLoading(true);

    return p(more).then(x => {
      if (!hasQuickship) {
        setHasQuickship(any(x));
      }
      setVisibleProducts(visibleProducts.concat(x));
      setStartIndex(nextIndex);
      setLoading(false);
    });
  };

  React.useLayoutEffect(() => {
    const updateSize = debounce(() => seWindowWidth(window.innerWidth));

    seWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  React.useEffect(() => {
    if (products.length > 0) {
      return;
    }

    (async () => {
      try {
        const res = await fetch('//demo3211013.mockable.io/ajmad');

        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }

        const products = await res.json();
        const filterTypes = new Set();

        products.forEach(product => {
          product.itemTypes = [];
          product.items.forEach(item => {
            const itemType = item['~product_type'];
            product.itemTypes.push(itemType);
            filterTypes.add(itemType);
          });
        });

        const visible = products.slice(0, 12);

        setProducts(products);
        setVisibleProducts(visible);
        setHasQuickship(any(visible));
        setFilters(Array.from(filterTypes));
      } catch (err) {
        console.error(err);
      }
    })();
  }, [products.length]);

  return (
    <main>
      <header className="wrapper">
        <h1 className={styles.main}>Appliance Packages</h1>
        <p className={styles.subtext}>
          Looking for a great deal on home appliances? Packages are the best
          bet. Most appliance packages consist of a range, refrigerator,
          over-the-range microwave, and dishwasher. However, some upscale brands
          have packages that incorporate wall ovens, cooktops, and integrated
          refrigerators.
        </p>
      </header>
      <Filters types={filters} which={windowWidth} shipping={hasQuickship} />
      <section className={styles.row}>
        {visibleProducts.map(p => (
          <Product product={p} key={p.sku} truncate={toSevenSmall} />
        ))}
        <button
          type="button"
          onClick={handleShowMore}
          className={startIndex < products.length ? 'button' : 'button hidden'}
          disabled={loading}
        >
          Show More
          <img
            src="spinner.gif"
            width="18"
            height="18"
            alt=""
            className={loading ? '' : 'hidden'}
          />
        </button>
      </section>
    </main>
  );
}

export default App;
