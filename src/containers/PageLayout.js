import React, { useState } from 'react';
import { Footer, Container, Content } from 'react-bulma-components';
import Header from '../components/Header';
import '../styles/styles.scss';
import * as styles from './PageLayout.module.scss';

function PageLayout({ children }) {
  const [navVisible, setNavVisible] = useState(false);
  function toggleNav() {
    setNavVisible(!navVisible);
  }

  return (
    <>
      <Header navVisible={navVisible} toggleNav={toggleNav} />
      <div className={styles.content}>{children}</div>
      <Footer>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <div className="is-size-6">
              <a href="https://tann.itch.io/slice-dice">Slice &amp; Dice</a> created by{' '}
              <a href="https://tann.fun/">tann</a> and{' '}
              <a href="https://twitter.com/a3um_pixels">a3um</a>.
            </div>
            <div className="is-size-6">
              Site by <a href="https://github.com/pm0">pm0</a>.
            </div>
          </Content>
        </Container>
      </Footer>
    </>
  );
}

export default PageLayout;
