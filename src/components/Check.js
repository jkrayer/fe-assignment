import React from 'react';
import styles from './Check.module.css';

function Check({ name, val }) {
  return (
    <label className={styles.label}>
      <input type="checkbox" className={styles.input} value={val} />
      <span className={styles.mock} />
      &nbsp;&nbsp;{name}
    </label>
  );
}

export default Check;
