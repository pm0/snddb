import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'react-bulma-components';
import RomanNumeral from './RomanNumeral';

const ItemsSection = (props) => {
  const { items, onSelectItem } = props;

  return (
    <>
      <Heading size={2} className="is-underlined">
        Items
      </Heading>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => {
        return (
          <div key={level}>
            <RomanNumeral value={level} type="header" />
            <div className="is-flex is-flex-wrap-wrap mb-4">
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
