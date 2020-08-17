import React from 'react';
import Check from './Check';
import styles from './FilterBar.module.css';

function FilterBar({ types, quickShip }) {
  const shippingToggle = !quickShip ? null : (
    <div className={styles.fieldset}>
      <div className={styles.legend}>Delivery Method:</div>
      <Check name="Quick Ship" val="quickShip" />
    </div>
  );

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <span>Select Appliances:</span>
        <select className={styles.select}>
          <option value="none">Select</option>
          {types.map(t => (
            <option value={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className={styles.label}>
        <span>Sort By:</span>
        <select className={styles.select}>
          <option value="none">Select...</option>
          <option value="low">Lowest Price</option>
          <option value="high">Highest Price</option>
        </select>
      </label>

      {shippingToggle}
      <button type="reset" className="button right">
        Clear All
      </button>
    </form>
  );
}

export default FilterBar;
