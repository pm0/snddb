import React from 'react';
import * as styles from './InfoPanel.module.scss';

const InfoPanel = ({ open, onClose, children }) => {
  return (
    <div className={`${styles.root} ${open ? 'open' : 'closed'}`}>
      <div className={styles.inner}>{children}</div>
      <div onClick={onClose} className={styles.closeButton}>
        x
      </div>
    </div>
  );
};

export default InfoPanel;
