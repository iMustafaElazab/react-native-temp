import {useQuery} from '@tanstack/react-query';
import {default as Config} from 'react-native-config';
import {fakerUser, queryUser} from '@src/core';
import type {User, ServerError} from '@src/core';
import type {UseQueryOptions} from '@tanstack/react-query';

const useGetUserDetailsApi = (options?: UseQueryOptions<User, ServerError>) => {
  const {queryFn, queryKey, ...restOptions} = options ?? {};

  return useQuery<User, ServerError>({
    queryFn: queryFn
      ? queryFn
      : () =>
          Config.USE_FAKE_API === 'true'
            ? fakerUser.getUserDetails()
            : queryUser.getUserDetails(),
    queryKey: queryKey ?? ['user'],
    ...restOptions,
  });
};

export default useGetUserDetailsApi;
