import {useQuery} from 'react-query';
import {queryUser} from '@src/core';
import type {User, ServerError} from '@src/core';
import type {UseQueryOptions} from 'react-query';

const useGetUserDetailsApi = (options?: UseQueryOptions<User, ServerError>) =>
  useQuery<User, ServerError>(
    'user',
    () => queryUser.getUserDetails(),
    options,
  );

export default useGetUserDetailsApi;
