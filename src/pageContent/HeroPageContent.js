import React from 'react';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Heading } from 'react-bulma-components';
import BodyLayout from '../containers/BodyLayout';
import DieNet from '../components/DieNet';

const HeroPageContent = (props) => {
  const { hero, crumbs } = props;
  const { name, level, hp, faces, spell, type } = hero;

  return (
    <BodyLayout>
      <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={name} />
      <Heading size={2} className={`snd-hero-title-${type}`}>
        {name}
      </Heading>
      <Heading size={4} subtitle>
        Level <span className="has-text-weight-bold">{level}</span>{' '}
        <span className="has-text-weight-bold">|</span> HP{' '}
        <span className="has-text-weight-bold">{hp}</span>
      </Heading>
      <DieNet faces={faces} spell={spell} heroType={type} />
    </BodyLayout>
  );
};

export default HeroPageContent;
