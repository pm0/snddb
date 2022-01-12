import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Heading } from 'react-bulma-components';

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
      <div className="is-flex">
        {items.map((item) => (
          <Link key={item.jsonId} to={`/item/${item.jsonId}/`} className="snd-hero-link-item">
            {item.name}
          </Link>
        ))}
      </div>
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
