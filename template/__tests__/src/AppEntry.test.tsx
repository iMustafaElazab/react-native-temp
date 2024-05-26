import {test} from '@jest/globals';
import {render} from '@testing-library/react-native';
import * as React from 'react';
import AppEntry from '@src/AppEntry';

test('AppEntry render', () => {
  render(<AppEntry />);
});
