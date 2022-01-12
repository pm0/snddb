import React from 'react';
import { Hero, Heading } from 'react-bulma-components';
import BodyLayout from '../containers/BodyLayout';
import HeroesSection from '../components/HeroesSection';
import ItemsSection from '../components/ItemsSection';

const IndexPageContent = (props) => {
  const { heroes, items } = props;

  return (
    <>
      <Hero size="small">
        <Hero.Body>
          <Heading size={1} className="has-text-centered">
            Slice <span className="has-text-full-red">&amp;</span> Dice DB
          </Heading>
          <Heading size={5} className="has-text-centered">
            For <a href="https://tann.itch.io/slice-dice">Slice &amp; Dice</a> by{' '}
            <a href="https://tann.fun/">tann</a> and{' '}
            <a href="https://twitter.com/a3um_pixels">a3um</a>
          </Heading>
        </Hero.Body>
      </Hero>
      <BodyLayout>
        <HeroesSection heroes={heroes} headingSize={3} linkTitle />
        <div className="mt-4" />
        <ItemsSection items={items} headingSize={3} linkTitle />
      </BodyLayout>
    </>
  );
};

export default IndexPageContent;
