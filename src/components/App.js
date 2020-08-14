import React from 'react';
import fetch from 'cross-fetch';
import Filters from './Filters';
import Product from './Product';

// (async () => {
//   try {
//     const res = await fetch('//demo3211013.mockable.io/ajmad');
//
//     if (res.status >= 400) {
//       throw new Error('Bad response from server');
//     }
//
//     const user = await res.json();
//
//     console.log('u', user);
//   } catch (err) {
//     console.error(err);
//   }
// })();

function App() {
  const [products, setProducts] = React.useState([]);
  const FilterTypes = new Set();

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
        setProducts(products);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [products.length]);

  return (
    <main className="App">
      <header>
        <h1>Appliance Packages</h1>
        <p>
          Looking for a great deal on home appliances? Packages are the best
          bet. Most appliance packages consist of a range, refrigerator,
          over-the-range microwave, and dishwasher. However, some upscale brands
          have packages that incorporate wall ovens, cooktops, and integrated
          refrigerators.
        </p>
      </header>
      <Filters types={[]} />
      <section>
        {products.map(p => (
          <Product product={p} />
        ))}
      </section>
    </main>
  );
}

export default App;
