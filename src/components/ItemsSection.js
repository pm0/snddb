import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Heading } from 'react-bulma-components';
import Spell from '../components/Spell';
import * as styles from './ItemsSection.module.scss';

const ItemsSection = (props) => {
  const [expandPanels, setExpandPanels] = useState([
    {},
    { open: false, itemId: '' },
    { open: false, itemId: '' },
    { open: false, itemId: '' },
    { open: false, itemId: '' },
    { open: false, itemId: '' },
    { open: false, itemId: '' },
    { open: false, itemId: '' },
    { open: false, itemId: '' },
    { open: false, itemId: '' },
  ]);

  const togglePanel = (level, id) => {
    setExpandPanels([
      ...expandPanels.slice(0, level),
      { open: !expandPanels[level].open || expandPanels[level].itemId !== id, itemId: id },
      ...expandPanels.slice(level + 1, 10),
    ]);
  };

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
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => {
        const selectedItem = expandPanels[level].itemId
          ? items.find((item) => item.jsonId === expandPanels[level].itemId)
          : null;

        return (
          <div key={level}>
            <Heading size={4}>Level {level}</Heading>
            <div className={`${styles.levelRow} is-flex is-flex-wrap-wrap`}>
              {items
                .filter((item) => item.level === level)
                .map((item) => (
                  /*<Link key={item.jsonId} to={`/item/${item.jsonId}/`} className="snd-hero-link-item">
                    {item.name}
                  </Link>*/
                  <div
                    key={item.jsonId}
                    onClick={() => togglePanel(level, item.jsonId)}
                    className="snd-hero-link-item"
                  >
                    {item.name}
                  </div>
                ))}
            </div>
            <div
              className={`${styles.expandPanel} ${expandPanels[level].open ? 'open' : 'closed'}`}
            >
              {selectedItem && (
                <div className={styles.expandPanelInner}>
                  <Heading size={4} className="snd-hero-title-item">
                    {selectedItem.name}
                  </Heading>
                  <div
                    dangerouslySetInnerHTML={{ __html: selectedItem.description }}
                    className="is-size-5 is-size-6-mobile"
                  />
                  {selectedItem.spell && <Spell {...selectedItem.spell} type="item" />}
                </div>
              )}
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
