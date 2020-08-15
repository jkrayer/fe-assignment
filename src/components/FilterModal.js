import React from 'react';

function FilterModal({ types }) {
  return (
    <form>
      <label>
        Sort By
        <select>
          <option>Highest Price</option>
          <option>Lowest Price</option>
        </select>
        <fieldset>
          <legend>Filter By</legend>
          <button type="reset">Clear All</button>
          <button type="submit">Apply</button>
        </fieldset>
        <fieldset>
          <legend>Appliance Type</legend>
          {types.map(type => (
            <label key={type}>
              <input type="checkbox" value={type} /> {type}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Delivery Type</legend>
          <label>
            <input type="checkbox" /> Quick Ship
          </label>
        </fieldset>
      </label>
    </form>
  );
}

export default FilterModal;
