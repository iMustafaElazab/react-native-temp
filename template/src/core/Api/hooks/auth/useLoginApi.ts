import {useMutation} from '@tanstack/react-query';
import {queryAuth} from '@src/core';
import type {
  LoginResponse,
  ServerError,
  ApiRequest,
  LoginBody,
} from '@src/core';
import type {UseMutationOptions} from '@tanstack/react-query';

const useLoginApi = (
  options?: UseMutationOptions<
    LoginResponse,
    ServerError,
    ApiRequest<LoginBody>
  >,
) => {
  const {mutationFn, ...restOptions} = options ?? {};

  return useMutation<LoginResponse, ServerError, ApiRequest<LoginBody>>({
    mutationFn: mutationFn ? mutationFn : request => queryAuth.login(request),
    ...restOptions,
  });
};

export default useLoginApi;
