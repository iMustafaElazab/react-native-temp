import type {
  ApiRequest,
  PagingResponse,
  Notification,
  UpdateFcmTokenBody,
  UpdateFcmTokenResponse,
  MarkNotificationReadResponse,
} from '@src/core';
import {httpClient} from '@src/core';

const queryNotifications = {
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  getNotifications: (request: ApiRequest) =>
    httpClient
      .get<PagingResponse<Notification>>('/notifications', {
        params: request.params,
      })
      .then(response => response.data),
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  updateFcmToken: (request: ApiRequest<UpdateFcmTokenBody>) =>
    httpClient
      .post<UpdateFcmTokenResponse>('/update-fcm-token', request.body)
      .then(response => response.data),
  // TODO: Change params, endpoint, method, and response mapping based on API requirements.
  markNotificationRead: (request: ApiRequest<any, string | number>) =>
    httpClient
      .post<MarkNotificationReadResponse>(
        `/mark-notification-read/${request.pathVar}`,
      )
      .then(response => response.data),
};

export default queryNotifications;
