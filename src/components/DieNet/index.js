import React from 'react';
import Spell from '../../components/Spell';
import Face from './Face';
import FacePlaceholder from './FacePlaceholder';
import * as styles from './DieNet.module.scss';

const DieNet = ({ faces, spell, heroType }) => {
  return (
    <div className={`${styles.root} is-flex is-flex-direction-column`}>
      <div className="is-flex">
        <FacePlaceholder />
        <Face face={faces[0]} heroType={heroType} />
        <FacePlaceholder />
        <FacePlaceholder />
      </div>

      <div className="is-flex">
        <Face face={faces[1]} heroType={heroType} />
        <Face face={faces[2]} heroType={heroType} />
        <Face face={faces[3]} heroType={heroType} />
        <Face face={faces[4]} heroType={heroType} />
      </div>

      <div className="is-flex is-align-items-center">
        <FacePlaceholder />
        <Face face={faces[5]} heroType={heroType} />
        {spell && (
          <div className={styles.spellWrapper}>
            <Spell {...spell} type={heroType} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DieNet;
