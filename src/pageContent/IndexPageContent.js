import React, { useState } from 'react';
import { Hero as BulmaHero, Heading } from 'react-bulma-components';
import BodyLayout from '../containers/BodyLayout';
import HeroesSection from '../components/HeroesSection';
import ItemsSection from '../components/ItemsSection';
import Hero from '../components/Hero';
import Item from '../components/Item';
import InfoPanel from '../components/InfoPanel';

const initialExpandInfo = { open: false, type: null, id: '' };

const IndexPageContent = (props) => {
  const [expandInfo, setExpandInfo] = useState(initialExpandInfo);

  const togglePanel = (id, type) => {
    setExpandInfo({ open: expandInfo.id !== id || !expandInfo.open, type, id });
  };

  const { heroes, items } = props;

  let expandInfoContent = null;
  if (expandInfo) {
    if (expandInfo.type === 'hero') {
      const hero = heroes.find((hero) => hero.jsonId === expandInfo.id);
      expandInfoContent = <Hero hero={hero} />;
    } else if (expandInfo.type === 'item') {
      const item = items.find((item) => item.jsonId === expandInfo.id);
      expandInfoContent = <Item item={item} />;
    }
  }

  return (
    <>
      <BulmaHero size="small">
        <BulmaHero.Body>
          <Heading size={1} className="has-text-centered">
            Slice <span className="has-text-full-red">&amp;</span> Dice DB
          </Heading>
          <Heading size={5} className="has-text-centered">
            For <a href="https://tann.itch.io/slice-dice">Slice &amp; Dice</a> by{' '}
            <a href="https://tann.fun/">tann</a> and{' '}
            <a href="https://twitter.com/a3um_pixels">a3um</a>
          </Heading>
        </BulmaHero.Body>
      </BulmaHero>
      <BodyLayout>
        <HeroesSection heroes={heroes} onSelectHero={(id) => togglePanel(id, 'hero')} />
        <div className="mt-4" />
        <ItemsSection items={items} onSelectItem={(id) => togglePanel(id, 'item')} />
        <InfoPanel open={expandInfo.open} onClose={() => setExpandInfo(initialExpandInfo)}>
          {expandInfoContent}
        </InfoPanel>
      </BodyLayout>
    </>
  );
};

export default IndexPageContent;
