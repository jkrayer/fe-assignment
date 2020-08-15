import React from 'react';
import styles from './Price.module.css';
import { formatMoney, formatDifference } from '../lib/';

function Price({ list_price, final }) {
  return (
    <div className={styles.price}>
      <p className={styles.final}>${formatMoney(final)}</p>
      <p className={styles.p}>
        <span className={styles.savings}>
          Save ${formatDifference(list_price, final)}
        </span>{' '}
        <span className={styles.listprice}>${formatMoney(list_price)}</span>
      </p>
    </div>
  );
}

export default Price;
