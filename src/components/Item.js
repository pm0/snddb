import React from 'react';
import RomanNumeral from '../components/RomanNumeral';
import Spell from '../components/Spell';

const Item = ({ item }) => {
  const { name, level, description, spell } = item;

  return (
    <div>
      <div className="is-flex is-justify-content-center is-align-items-center">
        <span className="is-size-4 has-text-weight-bold snd-hero-title-item">{name}</span>
        <RomanNumeral value={level} type="icon" />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="is-size-5 is-size-6-mobile has-text-centered"
      />
      {spell && <Spell {...spell} type="item" />}
    </div>
  );
};

export default Item;
