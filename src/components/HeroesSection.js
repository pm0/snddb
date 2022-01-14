import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components';
import * as styles from './HeroesSection.module.scss';

const heroTypeOrder = ['adept', 'acolyte', 'defender', 'warrior', 'thief'];

const orderValueSort = (a, b) => {
  if (a.order > b.order) {
    return 1;
  } else {
    return -1;
  }
};

const HeroesSection = (props) => {
  const { heroes, onSelectHero } = props;

  return (
    <>
      <Heading size={3}>Heroes</Heading>
      {[1, 2, 3].map((level) => (
        <div key={level}>
          <Heading size={4}>Level {level}</Heading>
          <div
            className={`${styles.levelSection} is-flex${
              level > 1 ? ' is-flex-direction-column' : ''
            } is-flex-wrap-wrap`}
          >
            {heroTypeOrder.map((heroType) => (
              <div
                key={`${heroType}-${level}`}
                className={`${level > 1 ? styles.classRow : ''} is-flex is-flex-wrap-wrap`}
              >
                {heroes
                  .filter((hero) => hero.type === heroType && hero.level === level)
                  .sort(orderValueSort)
                  .map((hero) => (
                    <div
                      key={hero.jsonId}
                      onClick={() => onSelectHero(hero.jsonId)}
                      className={`snd-hero-link-${hero.type}`}
                    >
                      {hero.name}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      ))}
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
