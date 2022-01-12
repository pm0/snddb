import React from 'react';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Heading } from 'react-bulma-components';
import BodyLayout from '../containers/BodyLayout';

const ItemPageContent = (props) => {
  const { item, crumbs } = props;
  const { name, level, description, spell } = item;

  return (
    <BodyLayout>
      <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={name} />
      <Heading size={2} className="snd-hero-title-defender">
        {name}
      </Heading>
      <Heading size={4} subtitle>
        Level <span className="has-text-weight-bold">{level}</span>{' '}
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: description }} className="is-size-5" />
      {spell && (
        <div>
          <div>{spell.name}</div>
          <div>{spell.cost}</div>
          <div dangerouslySetInnerHTML={{ __html: spell.description }} />
        </div>
      )}
    </BodyLayout>
  );
};

export default ItemPageContent;
