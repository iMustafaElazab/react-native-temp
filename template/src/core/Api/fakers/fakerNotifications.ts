import type {
  ApiRequest,
  PagingResponse,
  Notification,
  UpdateFcmTokenBody,
  UpdateFcmTokenResponse,
  MarkNotificationReadResponse,
} from '@src/core';
import {randomIntFromInterval} from '@src/utils';

const getLogMessage = (message: string) =>
  `## fakers::fakerNotifications:: ${message}`;

const fakerNotifications = {
  getNotifications: (
    request: ApiRequest,
  ): Promise<PagingResponse<Notification>> => {
    console.info(getLogMessage('getNotifications'), request);

    return new Promise(res =>
      setTimeout(
        () => {
          res({
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
          });
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
  updateFcmToken: (
    request: ApiRequest<UpdateFcmTokenBody>,
  ): Promise<UpdateFcmTokenResponse> => {
    console.info(getLogMessage('updateFcmToken'), request);

    return new Promise(res =>
      setTimeout(
        () => {
          res({message: 'Updated FCM token successfully'});
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
  markNotificationRead: (
    request: ApiRequest<any, string | number>,
  ): Promise<MarkNotificationReadResponse> => {
    console.info(getLogMessage('markNotificationRead'), request);

    return new Promise(res =>
      setTimeout(
        () => {
          res({message: 'Marked notification read successfully'});
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
};

export default fakerNotifications;
