import {ScrollView} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Screen} from '@src/components';
import type {RootStackScreenProps} from '@src/navigation';
import Form from './Form';
import Header from './Header';
import styles from './styles';

export default React.memo((_props: RootStackScreenProps<'login'>) => (
  <Screen>
    <Header />
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <Form />
    </ScrollView>
  </Screen>
));
