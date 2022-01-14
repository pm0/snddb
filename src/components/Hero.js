import React from 'react';
import RomanNumeral from '../components/RomanNumeral';
import HeroFaces from '../components/HeroFaces';
import Spell from '../components/Spell';
import * as styles from './Hero.module.scss';

const Hero = ({ hero }) => {
  const { name, level, hp, faces, spell, type } = hero;

  const pips = [];
  for (let i = 0; i < hp; i++) {
    pips.push(<div key={`pip-${i}`} className={styles.healthPip} />);
  }

  return (
    <div>
      <div className="is-flex is-justify-content-center is-align-items-center">
        <span className={`is-size-4 snd-hero-title-${type}`}>{name}</span>
        <RomanNumeral value={level} />
        <div className={styles.healthPips}>{pips}</div>
      </div>
      <div className="mt-3" />
      <HeroFaces faces={faces} heroType={type} heroName={name} />
      {spell && (
        <>
          <div className="mt-3" />
          <Spell {...spell} type={type} />
        </>
      )}
    </div>
  );
};

export default Hero;
