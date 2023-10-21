import {useMutation} from '@tanstack/react-query';
import {queryNotifications} from '@src/core';
import type {
  UpdateFcmTokenResponse,
  ServerError,
  ApiRequest,
  UpdateFcmTokenBody,
} from '@src/core';
import type {UseMutationOptions} from '@tanstack/react-query';

const useUpdateFcmTokenApi = (
  options?: UseMutationOptions<
    UpdateFcmTokenResponse,
    ServerError,
    ApiRequest<UpdateFcmTokenBody>
  >,
) => {
  const {mutationFn, ...restOptions} = options ?? {};

  return useMutation<
    UpdateFcmTokenResponse,
    ServerError,
    ApiRequest<UpdateFcmTokenBody>
  >({
    mutationFn: mutationFn
      ? mutationFn
      : request => queryNotifications.updateFcmToken(request),
    ...restOptions,
  });
};

export default useUpdateFcmTokenApi;
