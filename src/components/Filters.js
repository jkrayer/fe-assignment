import React from 'react';

function Filters({ types }) {
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
          <label>
            <input type="checkbox" /> Map Types Here
          </label>
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

export default Filters;
