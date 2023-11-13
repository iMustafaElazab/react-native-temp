import {useInfiniteQuery} from '@tanstack/react-query';
import {default as Config} from 'react-native-config';
import {fakerNotifications, queryNotifications} from '@src/core';
import type {
  ApiRequest,
  PagingResponse,
  Notification,
  ServerError,
} from '@src/core';
import type {UseInfiniteQueryOptions} from '@tanstack/react-query';

const useGetNotificationsApi = (
  request: ApiRequest,
  options?: Omit<
    UseInfiniteQueryOptions<
      PagingResponse<Notification>,
      ServerError,
      ApiRequest
    >,
    'queryFn' | 'queryKey' | 'getNextPageParam'
  >,
) => {
  const {initialPageParam, ...restOptions} = options ?? {};

  return useInfiniteQuery<
    PagingResponse<Notification>,
    ServerError,
    ApiRequest
  >({
    queryFn: () =>
      Config.USE_FAKE_API === 'true'
        ? fakerNotifications.getNotifications(request)
        : queryNotifications.getNotifications(request),
    queryKey: ['notifications', request],
    // TODO: Change object to match API.
    initialPageParam: initialPageParam ? initialPageParam : {page: 1, size: 10},
    getNextPageParam: lastPage =>
      lastPage.currentPage === lastPage.lastPage
        ? undefined
        : // TODO: Change object to match API.
          {page: (lastPage.currentPage ?? 1) + 1, size: request.params?.size},
    ...restOptions,
  });
};

export default useGetNotificationsApi;
