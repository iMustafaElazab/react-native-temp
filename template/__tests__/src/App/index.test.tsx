import {test} from '@jest/globals';
import {render} from '@testing-library/react-native';
import * as React from 'react';
import App from '@src/App';

test('App render', () => {
  render(<App />);
});
