import {useMutation} from 'react-query';
import {queryAuth} from '@src/core';
import type {
  LoginResponse,
  ServerError,
  ApiRequest,
  LoginBody,
} from '@src/core';
import type {UseMutationOptions} from 'react-query';

const useLoginApi = (
  options?: UseMutationOptions<
    LoginResponse,
    ServerError,
    ApiRequest<LoginBody>
  >,
) =>
  useMutation<LoginResponse, ServerError, ApiRequest<LoginBody>>(
    (request: ApiRequest<LoginBody>) => queryAuth.login(request),
    options,
  );

export default useLoginApi;
