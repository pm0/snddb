import React from 'react';
import RomanNumeral from '../components/RomanNumeral';
import Spell from '../components/Spell';

const Item = ({ item }) => {
  const { name, level, description, spell } = item;

  return (
    <div>
      <div className="is-flex is-align-items-center">
        <span className="is-size-4 snd-hero-title-item">{name}</span>
        <RomanNumeral value={level} />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="is-size-5 is-size-6-mobile"
      />
      {spell && <Spell {...spell} type="item" />}
    </div>
  );
};

export default Item;
