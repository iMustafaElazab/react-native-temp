import {Button} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useLoginApi} from '@src/core';
import {setErrorDialogMessage} from '@src/store';
import {saveUserDataOpenHome} from '@src/utils';
import styles from './styles';
import type {FormValues} from './types';

export default React.memo(() => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## Login::Form::LoginButton:: ${message}`;
  // #endregion

  const {t: translate} = useTranslation();

  // #region Redux
  const dispatch = useDispatch();
  // #endregion

  // #region Form
  const {handleSubmit} = useFormContext<FormValues>();
  // #endregion

  // #region API
  const {
    mutate: callLoginApi,
    isPending,
    isSuccess,
    isError,
    data: user,
    error,
  } = useLoginApi();

  const handleSuccess = React.useCallback(() => {
    console.info(getLogMessage('handleSuccess'), user);

    if (user) {
      saveUserDataOpenHome(
        user,
        translate('error_while_action', {action: translate('login')}),
      );
    } else {
      dispatch(
        setErrorDialogMessage(
          translate('error_while_action', {action: translate('login')}),
        ),
      );
    }
  }, [user, translate, dispatch]);

  const handleError = React.useCallback(() => {
    console.error(getLogMessage('handleError'), error);

    if (error) {
      dispatch(
        setErrorDialogMessage(
          error.errorMessage ??
            translate('error_while_action', {action: translate('login')}),
        ),
      );
    }
  }, [error, dispatch, translate]);
  // #endregion

  // #region Press events
  const onLoginPress = (formData: FormValues) => {
    console.info(getLogMessage('onLoginPress'), formData);
    Keyboard.dismiss();

    callLoginApi({
      body: {username: formData.username, password: formData.password},
    });
  };

  React.useEffect(() => {
    if (isSuccess) {
      handleSuccess();
    }

    if (isError) {
      handleError();
    }
  }, [isSuccess, isError, handleSuccess, handleError]);
  // #endregion

  // #region UI
  return isPending ? (
    <ActivityIndicator style={styles.btLogin} />
  ) : (
    <Button
      text={translate('login')}
      style={styles.btLogin}
      onPress={handleSubmit(onLoginPress)}
    />
  );
  // #endregion
});
