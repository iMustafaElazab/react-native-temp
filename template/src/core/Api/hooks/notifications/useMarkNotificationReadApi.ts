import {useMutation} from 'react-query';
import {queryNotifications} from '@src/core';
import type {
  MarkNotificationReadResponse,
  ServerError,
  ApiRequest,
} from '@src/core';
import type {UseMutationOptions} from 'react-query';

const useMarkNotificationReadApi = (
  options?: UseMutationOptions<
    MarkNotificationReadResponse,
    ServerError,
    ApiRequest<any, string | number>
  >,
) =>
  useMutation<
    MarkNotificationReadResponse,
    ServerError,
    ApiRequest<any, string | number>
  >(
    (request: ApiRequest<any, string | number>) =>
      queryNotifications.markNotificationRead(request),
    options,
  );

export default useMarkNotificationReadApi;
