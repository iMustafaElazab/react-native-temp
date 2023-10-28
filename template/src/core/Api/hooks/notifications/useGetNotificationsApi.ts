import {useQuery} from '@tanstack/react-query';
import {default as Config} from 'react-native-config';
import {fakerNotifications, queryNotifications} from '@src/core';
import type {
  ApiRequest,
  PagingResponse,
  Notification,
  ServerError,
} from '@src/core';
import type {UseQueryOptions} from '@tanstack/react-query';

const useGetNotificationsApi = (
  request: ApiRequest,
  options?: Omit<
    UseQueryOptions<PagingResponse<Notification>, ServerError, ApiRequest>,
    'queryFn' | 'queryKey'
  >,
) =>
  useQuery<PagingResponse<Notification>, ServerError, ApiRequest>({
    queryFn: () =>
      Config.USE_FAKE_API === 'true'
        ? fakerNotifications.getNotifications(request)
        : queryNotifications.getNotifications(request),
    queryKey: ['notifications', request, request.params],
    ...(options ?? {}),
  });

export default useGetNotificationsApi;
