import React from 'react';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import BodyLayout from '../containers/BodyLayout';
import ItemsSection from '../components/ItemsSection';

const ItemsPageContent = (props) => {
  const { items, crumbs } = props;

  return (
    <BodyLayout>
      <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={name} />
      <ItemsSection items={items} headingSize={2} />
    </BodyLayout>
  );
};

export default ItemsPageContent;
