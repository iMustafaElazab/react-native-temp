import messaging from '@react-native-firebase/messaging';
import {
  setUser as setLocalStorageUser,
  removeUser as removeLocalStorageUser,
} from '@src/core';
import type {User} from '@src/core';
import {reset} from '@src/navigation';
import {
  store,
  setUser as setStateUser,
  removeUser as removeStateUser,
} from '@src/store';
import {queryClient} from '@src/utils';

const getLogMessage = (message: string) => `## UserUtils:: ${message}`;

export const saveUserData = (user: User, onFinish?: () => void) => {
  console.info(getLogMessage('saveUserData'), user);
  setLocalStorageUser(user);
  store.dispatch(setStateUser(user));
  onFinish?.();
};

export const saveUserDataOpenHome = (user: User, errorMessage?: string) => {
  console.info(getLogMessage('saveUserDataOpenHome'), user, errorMessage);

  saveUserData(user, () => {
    reset('home');
  });
};

export const removeUserDataLogout = async () => {
  console.info(getLogMessage('removeUserDataLogout'));
  removeLocalStorageUser();
  await messaging().deleteToken();
  store.dispatch(removeStateUser());
  reset('login');
  queryClient.resetQueries();
};
