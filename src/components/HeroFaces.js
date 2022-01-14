import React from 'react';
import * as styles from './HeroFaces.module.scss';

const Face = ({ face, heroType }) =>
  face === null ? (
    <div
      className={`${styles.face} snd-hero-border-${heroType} has-text-weight-bold has-text-acolyte`}
    >
      X
    </div>
  ) : (
    <div
      dangerouslySetInnerHTML={{ __html: face.effect.description }}
      className={`${styles.face} snd-hero-border-${heroType}`}
    />
  );

const HeroFaces = ({ faces, heroType, heroName }) => (
  <div className={`${styles.root}`}>
    {faces.map((face, idx) => (
      <Face face={face} heroType={heroType} key={`${heroName}-${idx}`} />
    ))}
  </div>
);

export default HeroFaces;
