import React from 'react';
import * as styles from './DieNet.module.scss';

const Face = ({ face, type }) => {
  return (
    <div className={`snd-hero-die-face-${type} ${styles.faceShown}`}>
      {face === null ? 'X' : <div dangerouslySetInnerHTML={{ __html: face.description }} />}
    </div>
  );
};

export default Face;
