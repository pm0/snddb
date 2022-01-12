import React from 'react';
import * as styles from './Spell.module.scss';

const Spell = (props) => {
  const { name, cost, description, type } = props;

  const pips = [];
  for (let i = 0; i < cost; i++) {
    pips.push(<div key={`pip-${i}`} className={styles.costPip} />);
  }

  return (
    <div className={`${styles.root} spell-${type}`}>
      <div className={`${styles.titleWrapper} spell-divider-${type}`}>
        <span>{name}</span>
        <div className={styles.costPips}>{pips}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} className={styles.description} />
    </div>
  );
};

export default Spell;
