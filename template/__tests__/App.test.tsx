/**
 * @format
 */

import 'react-native';
import {it} from '@jest/globals';
import * as React from 'react';
import {create} from 'react-test-renderer';
import App from '@src/App';

// Note: import explicitly to use the types shiped with jest.

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  create(<App />);
});
