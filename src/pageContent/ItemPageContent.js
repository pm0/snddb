import React from 'react';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Heading } from 'react-bulma-components';
import BodyLayout from '../containers/BodyLayout';
import Spell from '../components/Spell';

const ItemPageContent = (props) => {
  const { item, crumbs } = props;
  const { name, level, description, spell } = item;

  return (
    <BodyLayout>
      <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={name} />
      <Heading size={2} className="snd-hero-title-item">
        {name}
      </Heading>
      <Heading size={4} subtitle>
        Level <span className="has-text-weight-bold">{level}</span>{' '}
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: description }} className="is-size-5" />
      {spell && <Spell {...spell} type="item" />}
    </BodyLayout>
  );
};

export default ItemPageContent;
