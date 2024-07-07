import type {User} from '@src/core';

export interface UserState {
  user?: User;
  unreadNotificationsCount?: number;
  apiToken?: string;
}
