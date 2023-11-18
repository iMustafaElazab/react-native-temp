import {LoadingDialog} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {type RootState} from '@src/store';

export default React.memo(() => {
  // #region Redux
  const {showLoadingDialog} = useSelector((state: RootState) => state.dialogs);
  // #endregion

  return <LoadingDialog visible={showLoadingDialog} />;
});
