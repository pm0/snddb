import React from 'react';
import { Container } from 'react-bulma-components';

import * as styles from './BodyLayout.module.scss';

function BodyLayout({ children }) {
  return (
    <Container>
      <div className={styles.root}>{children}</div>
    </Container>
  );
}

export default BodyLayout;
