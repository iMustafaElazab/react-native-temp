import type {
  ApiRequest,
  PagingResponse,
  Notification,
  UpdateFcmTokenBody,
  UpdateFcmTokenResponse,
  MarkNotificationReadResponse,
} from '@src/core';
import {fakersDelay} from '.';

const getLogMessage = (message: string) =>
  `## fakers::fakerNotifications:: ${message}`;

const fakerNotifications = {
  getNotifications: async (
    request: ApiRequest,
  ): Promise<PagingResponse<Notification>> => {
    console.info(getLogMessage('getNotifications'), request);
    await fakersDelay();

    return {
      currentPage: 1,
      lastPage: 1,
      data: [
        {
          id: 1,
          key: '1',
          title: 'Notification 1',
          message: 'Notification 1 body',
        },
        {
          id: 2,
          key: '2',
          title: 'Notification 2',
          message: 'Notification 2 body',
        },
        {
          id: 3,
          key: '3',
          title: 'Notification 3',
          message: 'Notification 3 body',
        },
      ],
    };
  },
  updateFcmToken: async (
    request: ApiRequest<UpdateFcmTokenBody>,
  ): Promise<UpdateFcmTokenResponse> => {
    console.info(getLogMessage('updateFcmToken'), request);
    await fakersDelay();
    return {message: 'Updated FCM token successfully'};
  },
  markNotificationRead: async (
    request: ApiRequest<any, string | number>,
  ): Promise<MarkNotificationReadResponse> => {
    console.info(getLogMessage('markNotificationRead'), request);
    await fakersDelay();
    return {message: 'Marked notification read successfully'};
  },
};

export default fakerNotifications;
