import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Heading } from 'react-bulma-components';

const customTypeSort = (a, b) => {
  const order = ['adept', 'acolyte', 'defender', 'warrior', 'thief'];
  if (order.indexOf(a.type) > order.indexOf(b.type)) {
    return 1;
  } else {
    return -1;
  }
};

const HeroesSection = (props) => {
  const { heroes, headingSize, linkTitle } = props;

  const heading = linkTitle ? (
    <Heading size={headingSize}>
      <Link to="/hero">Heroes</Link>
    </Heading>
  ) : (
    <Heading size={headingSize}>Heroes</Heading>
  );

  return (
    <>
      {heading}
      <div className="is-flex">
        {heroes.sort(customTypeSort).map((hero) => (
          <Link
            key={hero.jsonId}
            to={`/hero/${hero.jsonId}/`}
            className={`snd-hero-link-${hero.type}`}
          >
            {hero.name}
          </Link>
        ))}
      </div>
    </>
  );
};

HeroesSection.defaultProps = {
  heroes: [],
  headingSize: 3,
  linkTitle: false,
};

HeroesSection.propTypes = {
  heroes: PropTypes.array,
  headingSize: PropTypes.number,
  linkTitle: PropTypes.bool,
};

export default HeroesSection;
