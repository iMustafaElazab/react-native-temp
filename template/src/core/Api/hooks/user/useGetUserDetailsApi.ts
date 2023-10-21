import {useQuery} from '@tanstack/react-query';
import {queryUser} from '@src/core';
import type {User, ServerError} from '@src/core';
import type {UseQueryOptions} from '@tanstack/react-query';

const useGetUserDetailsApi = (options?: UseQueryOptions<User, ServerError>) => {
  const {queryFn, queryKey, ...restOptions} = options ?? {};

  return useQuery<User, ServerError>({
    queryFn: queryFn ? queryFn : () => queryUser.getUserDetails(),
    queryKey: queryKey ?? ['user'],
    ...restOptions,
  });
};

export default useGetUserDetailsApi;
