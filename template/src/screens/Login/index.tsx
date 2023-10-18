import {Text} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Screen} from '@src/components';
import type {RootStackScreenProps} from '@src/navigation';

export default React.memo((_props: RootStackScreenProps<'login'>) => (
  <Screen>
    <Text>Login Screen</Text>
  </Screen>
));
