import React from 'react';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import BodyLayout from '../containers/BodyLayout';
import HeroesSection from '../components/HeroesSection';

const IndexPageContent = (props) => {
  const { heroes, crumbs } = props;

  return (
    <BodyLayout>
      <Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={name} />
      <HeroesSection heroes={heroes} headingSize={2} />
    </BodyLayout>
  );
};

export default IndexPageContent;
