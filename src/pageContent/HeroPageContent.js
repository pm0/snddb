import React from 'react';
import { Columns, Heading } from 'react-bulma-components';
import BodyLayout from '../containers/BodyLayout';

const HeroPageContent = (props) => {
  const { name, level, faces, spell, type } = props;

  return (
    <BodyLayout>
      <Heading size={2} className={`snd-hero-title-${type}`}>
        {name}
      </Heading>
      <Heading size={4} subtitle>
        Level {level}
      </Heading>
    </BodyLayout>
  );
};

export default HeroPageContent;
