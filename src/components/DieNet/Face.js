import React from 'react';
import * as styles from './DieNet.module.scss';

const Face = ({ face, heroType }) => {
  const { effect } = face || {};
  const { description } = effect || {};

  return (
    <div className={`snd-hero-die-face-${heroType} ${face ? styles.faceShown : styles.faceBlank}`}>
      {face === null ? (
        'X'
      ) : (
        <div>
          <div dangerouslySetInnerHTML={{ __html: description }} className={styles.inner} />
        </div>
      )}
    </div>
  );
};

export default Face;
