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

/**
 * Save user data to local storage and store state.
 *
 * @param user - The user object to be saved.
 * @param onFinish - Optional callback function to be called after saving the user data.
 */
export const saveUserData = (user: User, onFinish?: () => void) => {
  console.info(getLogMessage('saveUserData'), user);
  setLocalStorageUser(user);
  store.dispatch(setStateUser(user));
  onFinish?.();
};

/**
 * Save user data and navigate to the home screen.
 *
 * @param user - The user object containing user data.
 * @returns void
 */
export const saveUserDataOpenHome = (user: User) => {
  console.info(getLogMessage('saveUserDataOpenHome'), user);

  saveUserData(user, () => {
    reset('home');
  });
};

/**
 * Function to remove user data during logout process.
 * This function performs the following actions:
 * 1. Logs a message indicating the start of the removal process.
 * 2. Removes user data from local storage.
 * 3. Deletes the messaging token.
 * 4. Dispatches an action to remove user state from the store.
 * 5. Resets the navigation to the 'login' screen.
 * 6. Resets queries in the query client.
 *
 * @returns {Promise<void>} A promise that resolves once all data removal actions are completed.
 */
export const removeUserDataLogout = async (): Promise<void> => {
  console.info(getLogMessage('removeUserDataLogout'));
  removeLocalStorageUser();
  await messaging().deleteToken();
  store.dispatch(removeStateUser());
  reset('login');
  queryClient.resetQueries();
};
