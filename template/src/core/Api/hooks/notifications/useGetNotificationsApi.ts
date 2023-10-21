import {useQuery} from '@tanstack/react-query';
import {queryNotifications} from '@src/core';
import type {
  ApiRequest,
  PagingResponse,
  Notification,
  ServerError,
} from '@src/core';
import type {UseQueryOptions} from '@tanstack/react-query';

const useGetNotificationsApi = (
  request: ApiRequest,
  options?: UseQueryOptions<
    PagingResponse<Notification>,
    ServerError,
    ApiRequest
  >,
) => {
  const {queryFn, queryKey, ...restOptions} = options ?? {};

  return useQuery<PagingResponse<Notification>, ServerError, ApiRequest>({
    queryFn: queryFn
      ? queryFn
      : () => queryNotifications.getNotifications(request),
    queryKey: queryKey ?? ['notifications', request.params],
    ...restOptions,
  });
};

export default useGetNotificationsApi;
