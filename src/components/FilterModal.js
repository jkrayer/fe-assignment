import React from 'react';
import styles from './FilterModal.module.css';

function FilterModal({ types }) {
  const [modal, setModal] = React.useState(false);
  const [appliance, setAppliance] = React.useState(false);
  const [delivery, setDelivery] = React.useState(false);

  function handleClose() {
    setModal(false);
    setAppliance(false);
    setDelivery(false);
  }

  if (!modal) {
    return (
      <button
        type="button"
        onClick={() => setModal(true)}
        className={styles.sort}
      >
        Sort &amp; Filter
      </button>
    );
  } else {
    return (
      <form className={styles.form}>
        <h1 className={styles.title}>
          Sort &amp; Filter{' '}
          <button type="button" onClick={handleClose} className={styles.close}>
            X
          </button>
        </h1>
        <fieldset className={styles.fieldset}>
          <label className={styles.label}>
            <span>Sort By:</span>
            <select className={styles.select}>
              <option>Highest Price</option>
              <option>Lowest Price</option>
            </select>
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className="legend">Filter By</legend>
          <div class="button-bar">
            <button
              className="button"
              type="reset"
              disabled={!appliance && !delivery}
            >
              Clear All
            </button>
            <button
              className="button alt"
              type="submit"
              disabled={!appliance && !delivery}
            >
              Apply
            </button>
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={!appliance ? 'legend closed' : 'legend'}>
            <span>Appliance Type</span>
            <button
              type="button"
              className={styles.toggle}
              onClick={() => setAppliance(!appliance)}
            >
              {appliance ? '-' : '+'}
            </button>
          </legend>
          <div className={!appliance ? 'hidden' : ''}>
            {types.map(type => (
              <label className={styles.checkLabel} key={type}>
                <input type="checkbox" value={type} /> {type}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={!delivery ? 'legend closed' : 'legend'}>
            <span>Delivery Type</span>
            <button
              type="button"
              className={styles.toggle}
              onClick={() => setDelivery(!delivery)}
            >
              {delivery ? '-' : '+'}
            </button>
          </legend>
          <div className={!delivery ? 'hidden' : ''}>
            <label className={styles.checkLabel}>
              <input type="checkbox" value="Quick Ship" /> Quick Ship
            </label>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default FilterModal;
