import {useMutation} from '@tanstack/react-query';
import {queryAuth} from '@src/core';
import type {LogoutResponse, ServerError} from '@src/core';
import type {UseMutationOptions} from '@tanstack/react-query';

const useLogoutApi = (
  options?: UseMutationOptions<LogoutResponse, ServerError>,
) => {
  const {mutationFn, ...restOptions} = options ?? {};

  return useMutation<LogoutResponse, ServerError>({
    mutationFn: mutationFn ? mutationFn : () => queryAuth.logout(),
    ...restOptions,
  });
};

export default useLogoutApi;
