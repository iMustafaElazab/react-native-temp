import * as React from 'react';
import {useDispatch} from 'react-redux';
import type {User} from '@src/core';
import {getUser as getLocalStorageUser} from '@src/core';
import {setUser as setStateUser} from '@src/store';

export const useSplashUserLoader = (isBootSplashLogoLoaded: boolean) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## SplashScreen::useSplashUserLoader:: ${message}`;
  // #endregion

  // #region Redux
  const dispatch = useDispatch();
  // #endregion

  // #region State
  const [isUserLoaded, setUserLoaded] = React.useState<boolean>(false);
  // #endregion

  /**
   * setUserToReduxStore
   *
   * Set given user to redux store.
   *
   * @param user The user to set to redux store.
   */
  const setUserToReduxStore = React.useCallback(
    (user: User) => {
      console.info(getLogMessage('setUserToReduxStore'), user);
      dispatch(setStateUser(user));
    },
    [dispatch],
  );

  /**
   * getUpdatedUserData
   *
   * Call API to load updated user data then:
   * - Set user to local storage.
   * - Set user to redux store.
   * - Set "isUserLoaded" state variable.
   */
  const getUpdatedUserData = React.useCallback(async () => {
    console.info(getLogMessage('getUpdatedUserData'));

    // try {
    //   const user = await callGetUserApi().unwrap();
    //   const localStorageUser = await getLocalStorageUser();

    //   const userWithTokens = {
    //     ...user,
    //     apiToken: user.apiToken ? user.apiToken : localStorageUser?.apiToken,
    //     fcmToken: localStorageUser?.fcmToken,
    //   };

    //   console.info(getLogMessage('userWithTokens'), userWithTokens);
    //   setLocalStorageUser(userWithTokens);
    //   setUserToReduxStore(userWithTokens);
    //   setUserLoaded(true);
    // } catch (error) {
    //   if (isErrorWithStatus(401, error)) {
    //     removeLocalStorageUser();
    //     dispatch(removeStateUser());
    //   }

    //   setUserLoaded(true);
    // }

    setUserLoaded(true);
  }, []);

  /**
   * getSavedUser
   *
   * Load user data from local storage then:
   * - If user available:
   *   - Set user to redux store.
   *   - Check if Internet connection available then:
   *     - If available call "getUpdatedUserData" to load updated user data from API.
   *     - Else set "isUserLoaded" state variable.
   * - Else:
   *   - Set "isUserLoaded" state variable.
   */
  const getSavedUser = React.useCallback(async () => {
    console.info(getLogMessage('getSavedUser'));
    const user = await getLocalStorageUser();
    console.info(getLogMessage('user'), user);

    if (user) {
      setUserToReduxStore(user);
      getUpdatedUserData();
    } else {
      setUserLoaded(true);
    }
  }, [setUserToReduxStore, getUpdatedUserData]);

  // #region Setup
  React.useEffect(() => {
    if (isBootSplashLogoLoaded) {
      getSavedUser();
    }
  }, [isBootSplashLogoLoaded, getSavedUser]);
  // #endregion

  return {isUserLoaded};
};
