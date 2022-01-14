import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Heading } from 'react-bulma-components';
import * as styles from './HeroesSection.module.scss';

const ItemsSection = (props) => {
  const { items, headingSize, linkTitle } = props;

  const heading = linkTitle ? (
    <Heading size={headingSize}>
      <Link to="/item">Items</Link>
    </Heading>
  ) : (
    <Heading size={headingSize}>Items</Heading>
  );

  return (
    <>
      {heading}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
        <div key={level}>
          <Heading size={4}>Level {level}</Heading>
          <div className={`${styles.levelRow} is-flex is-flex-wrap-wrap`}>
            {items
              .filter((item) => item.level === level)
              .map((item) => (
                <Link key={item.jsonId} to={`/item/${item.jsonId}/`} className="snd-hero-link-item">
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

ItemsSection.defaultProps = {
  items: [],
  headingSize: 3,
  linkTitle: false,
};

ItemsSection.propTypes = {
  items: PropTypes.array,
  headingSize: PropTypes.number,
  linkTitle: PropTypes.bool,
};

export default ItemsSection;
