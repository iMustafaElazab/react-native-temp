import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@src/navigation';
import {paperTheme} from '@src/utils';

export default React.memo(() => {
  // #region State
  const [languageLoaded] = React.useState<boolean>(false);
  // #endregion

  // #region UI
  return languageLoaded ? (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer />
      {/* <ErrorDialog />
      <LoadingDialog /> */}
    </PaperProvider>
  ) : undefined;
  // #endregion
});
