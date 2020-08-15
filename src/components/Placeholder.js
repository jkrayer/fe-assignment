import React from 'react';
import styles from './Placeholder.module.css';

function Placeholder() {
  // srcset 157 x 144, some bigger: 305 x 204

  return (
    <img
      className={styles.img}
      srcSet="https://via.placeholder.com/157x144 767w, https://via.placeholder.com/305x204"
      src="//via.placeholder.com/305x204"
      alt=""
    />
  );
}

export default Placeholder;
