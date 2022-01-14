import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components';
import * as styles from './ItemsSection.module.scss';

const ItemsSection = (props) => {
  const { items, onSelectItem } = props;

  return (
    <>
      <Heading size={3}>Items</Heading>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => {
        return (
          <div key={level}>
            <Heading size={4}>Level {level}</Heading>
            <div className={`${styles.levelRow} is-flex is-flex-wrap-wrap`}>
              {items
                .filter((item) => item.level === level)
                .map((item) => (
                  <div
                    key={item.jsonId}
                    onClick={() => onSelectItem(item.jsonId)}
                    className="snd-hero-link-item"
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          </div>
        );
      })}
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
