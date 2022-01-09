import React from 'react';
//import { ... } from 'react-bulma-components';
import Face from './Face';
import FaceSpell from './FaceSpell';
import FacePlaceholder from './FacePlaceholder';
import * as styles from './DieNet.module.scss';

const DieNet = ({ faces, spell, type }) => {
  return (
    <div className={`${styles.root} is-flex is-flex-direction-column`}>
      <div className="is-flex">
        <FacePlaceholder />
        <Face face={faces[0]} type={type} />
        <FacePlaceholder />
        <FacePlaceholder />
      </div>

      <div className="is-flex">
        <Face face={faces[1]} type={type} />
        <Face face={faces[2]} type={type} />
        <Face face={faces[3]} type={type} />
        <Face face={faces[4]} type={type} />
      </div>

      <div className="is-flex">
        <FacePlaceholder />
        <Face face={faces[5]} type={type} />
        <FaceSpell spell={spell} />
        <FacePlaceholder />
      </div>
    </div>
  );
};

export default DieNet;
