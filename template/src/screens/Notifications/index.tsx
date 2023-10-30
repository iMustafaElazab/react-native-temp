import {Text} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Screen} from '@src/components';
import Header from './Header';

export default React.memo(() => (
  <Screen>
    <Header />
    <Text>Notifications Screen</Text>
  </Screen>
));
