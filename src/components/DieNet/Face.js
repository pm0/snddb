import React from 'react';
import * as styles from './DieNet.module.scss';

const Face = ({ face, heroType, tooltipDirection }) => {
  const { value, effect } = face || {};
  const { description, jsonId, hasValue, references } = effect || {};

  return (
    <div className={`snd-hero-die-face-${heroType} ${face ? styles.faceShown : styles.faceBlank}`}>
      {face === null ? (
        'X'
      ) : (
        <div dangerouslySetInnerHTML={{ __html: description }} className={styles.inner} />
      )}
    </div>
  );
};

export default Face;
