import {useMutation} from 'react-query';
import {queryNotifications} from '@src/core';
import type {
  UpdateFcmTokenResponse,
  ServerError,
  ApiRequest,
  UpdateFcmTokenBody,
} from '@src/core';
import type {UseMutationOptions} from 'react-query';

const useUpdateFcmTokenApi = (
  options?: UseMutationOptions<
    UpdateFcmTokenResponse,
    ServerError,
    ApiRequest<UpdateFcmTokenBody>
  >,
) =>
  useMutation<
    UpdateFcmTokenResponse,
    ServerError,
    ApiRequest<UpdateFcmTokenBody>
  >(
    (request: ApiRequest<UpdateFcmTokenBody>) =>
      queryNotifications.updateFcmToken(request),
    options,
  );

export default useUpdateFcmTokenApi;
