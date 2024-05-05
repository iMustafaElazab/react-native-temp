import * as React from 'react';
import {Screen} from '@src/components';
import {Header, NotificationsList} from './components';

export default React.memo(() => (
  <Screen>
    <Header />
    <NotificationsList />
  </Screen>
));
