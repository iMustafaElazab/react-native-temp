import {jest} from '@jest/globals';

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({
    children,
  }: Readonly<React.PropsWithChildren<{}>>) => children;
  return {KeyboardAwareScrollView};
});
