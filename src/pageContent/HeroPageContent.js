import React from 'react';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Columns, Heading } from 'react-bulma-components';
import BodyLayout from '../containers/BodyLayout';

const HeroPageContent = (props) => {
  const { hero, crumbs } = props;
  const { name, level, faces, spell, type } = hero;

  return (
    <BodyLayout>
      <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={name} />
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
