import {useMutation} from '@tanstack/react-query';
import {default as Config} from 'react-native-config';
import {fakerNotifications, queryNotifications} from '@src/core';
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
      : request =>
          Config.USE_FAKE_API === 'true'
            ? fakerNotifications.updateFcmToken(request)
            : queryNotifications.updateFcmToken(request),
    ...restOptions,
  });
};

export default useUpdateFcmTokenApi;
