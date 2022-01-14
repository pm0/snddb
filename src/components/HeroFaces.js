import React from 'react';
import * as styles from './HeroFaces.module.scss';

const sortFn = (a, b) => {
  if (!a) return 1;
  if (!b) return -1;
  if (a.effect.description > b.effect.description) return 1;
  return -1;
};

const Face = ({ face, heroType }) =>
  face === null ? (
    <div
      className={`${styles.face} snd-hero-border-${heroType}
        is-flex is-justify-content-center is-align-items-center
        has-text-weight-bold has-text-acolyte`}
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
    {faces.sort(sortFn).map((face, idx) => (
      <Face face={face} heroType={heroType} key={`${heroName}-${idx}`} />
    ))}
  </div>
);

export default HeroFaces;
