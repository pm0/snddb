import React from 'react';
import * as styles from './DieNet.module.scss';

const FaceSpell = ({ spell }) => {
  return (
    <div className={styles.faceSpell}>
      {spell && <div className="snd-hero-die-face-adept">{spell.name}</div>}
    </div>
  );
};

export default FaceSpell;
