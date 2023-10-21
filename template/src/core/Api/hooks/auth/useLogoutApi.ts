import {useMutation} from 'react-query';
import {queryAuth} from '@src/core';
import type {LogoutResponse, ServerError} from '@src/core';
import type {UseMutationOptions} from 'react-query';

const useLogoutApi = (
  options?: UseMutationOptions<LogoutResponse, ServerError>,
) =>
  useMutation<LogoutResponse, ServerError>(() => queryAuth.logout(), options);

export default useLogoutApi;
