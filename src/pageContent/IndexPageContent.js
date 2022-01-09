import React from 'react';
import { Link } from 'gatsby';
import { Hero, Heading } from 'react-bulma-components';
import BodyLayout from '../containers/BodyLayout';

const IndexPageContent = (props) => {
  const { heroes } = props;

  return (
    <>
      <Hero size="small">
        <Hero.Body>
          <Heading size={1} className="has-text-centered">
            Slice <span className="has-text-full-red">&amp;</span> Dice DB
          </Heading>
          <Heading size={5} className="has-text-centered">
            For the game <a href="https://tann.itch.io/slice-dice">Slice &amp; Dice</a> by{' '}
            <a href="https://tann.fun/">tann</a> and{' '}
            <a href="https://twitter.com/a3um_pixels">a3um</a>
          </Heading>
        </Hero.Body>
      </Hero>
      <BodyLayout>
        <Heading size={3}>Heroes</Heading>
        <div className="is-flex">
          {heroes.map((hero) => (
            <Link
              key={hero.jsonId}
              to={`/hero/${hero.jsonId}/`}
              className={`snd-hero-link-${hero.type}`}
            >
              {hero.name}
            </Link>
          ))}
        </div>
      </BodyLayout>
    </>
  );
};

export default IndexPageContent;
