import {useQueryClient, useMutation} from '@tanstack/react-query';
import {queryNotifications} from '@src/core';
import type {
  MarkNotificationReadResponse,
  ServerError,
  ApiRequest,
} from '@src/core';
import type {UseMutationOptions} from '@tanstack/react-query';

const useMarkNotificationReadApi = (
  options?: UseMutationOptions<
    MarkNotificationReadResponse,
    ServerError,
    ApiRequest<any, string | number>
  >,
) => {
  const queryClient = useQueryClient();
  const {mutationFn, onSuccess, ...restOptions} = options ?? {};

  return useMutation<
    MarkNotificationReadResponse,
    ServerError,
    ApiRequest<any, string | number>
  >({
    mutationFn: mutationFn
      ? mutationFn
      : request => queryNotifications.markNotificationRead(request),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({queryKey: ['notifications']});
      onSuccess?.(data, variables, context);
    },
    ...restOptions,
  });
};

export default useMarkNotificationReadApi;
