import * as React from 'react';
import {Screen, ScrollContainer} from '@src/components';
import {Header, Form} from './components';
import styles from './styles';

export default React.memo(() => (
  <Screen>
    <Header />
    <ScrollContainer
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <Form />
    </ScrollContainer>
  </Screen>
));
