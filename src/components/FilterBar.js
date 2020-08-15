import React from 'react';
import styles from './FilterBar.module.css';

function FilterBar() {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <span>Select Appliances:</span>
        <select className={styles.select}>
          <option>Apply</option>
        </select>
      </label>

      <label className={styles.label}>
        <span>Sort By:</span>
        <select className={styles.select}>
          <option>Highest Price</option>
        </select>
      </label>

      <div className={styles.fieldset}>
        <div className={styles.legend}>Delivery Method:</div>
        <label className={styles.checkLabel}>
          <input type="checkbox" />
          &nbsp; Quick Ship
        </label>
      </div>
      <button type="reset" className={styles.button}>
        Clear All
      </button>
    </form>
  );
}

export default FilterBar;
