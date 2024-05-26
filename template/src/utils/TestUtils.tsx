import {render} from '@testing-library/react-native';
import * as React from 'react';
import {Provider} from 'react-redux';
import type {AppStore} from '@src/store';
import {store as reduxStore} from '@src/store';
import type {RenderOptions} from '@testing-library/react-native';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    // Automatically create a store instance if no store was passed in
    store = reduxStore,
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({
    children,
  }: Readonly<React.PropsWithChildren<{}>>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
