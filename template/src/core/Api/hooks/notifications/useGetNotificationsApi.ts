import {useQuery} from 'react-query';
import {queryNotifications} from '@src/core';
import type {
  ApiRequest,
  PagingResponse,
  Notification,
  ServerError,
} from '@src/core';
import type {UseQueryOptions} from 'react-query';

const useGetNotificationsApi = (
  request: ApiRequest,
  options?: UseQueryOptions<
    PagingResponse<Notification>,
    ServerError,
    ApiRequest
  >,
) =>
  useQuery<PagingResponse<Notification>, ServerError, ApiRequest>(
    ['notifications', request.params],
    () => queryNotifications.getNotifications(request),
    options,
  );

export default useGetNotificationsApi;
