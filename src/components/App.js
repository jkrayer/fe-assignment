import React from 'react';
import fetch from 'cross-fetch';
import Filters from './Filters';
import Product from './Product';
import styles from './App.module.css';
import { truncate, debounce } from '../lib/';

const toSeven = x => truncate(7, x);

function App() {
  const [products, setProducts] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [windowWidth, seWindowWidth] = React.useState(0);

  const toSevenSmall = x => (windowWidth < 400 ? toSeven(x) : x);

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

        setProducts(products);
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
      <Filters types={filters} />
      <section className={styles.row}>
        {products.map(p => (
          <Product product={p} key={p.sku} truncate={toSevenSmall} />
        ))}
      </section>
    </main>
  );
}

export default App;
