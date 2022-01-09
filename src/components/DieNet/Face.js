import React from 'react';
import * as styles from './DieNet.module.scss';

const Face = ({ face, heroType }) => {
  const { value, effect } = face || {};
  const { description, jsonId, hasValue, references } = effect || {};

  return (
    <div className={`snd-hero-die-face-${heroType} ${styles.faceShown}`}>
      {face === null ? 'X' : <div dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  );
};

export default Face;
