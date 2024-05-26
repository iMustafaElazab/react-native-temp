import {jest} from '@jest/globals';
// import * as React from 'react';

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({
    children,
  }: Readonly<React.PropsWithChildren<{}>>) => children;
  return {KeyboardAwareScrollView};
});
