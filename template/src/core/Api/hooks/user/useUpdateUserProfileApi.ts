import {useQueryClient, useMutation} from 'react-query';
import {queryUser} from '@src/core';
import type {User, ServerError, ApiRequest} from '@src/core';
import type {UseMutationOptions} from 'react-query';

const useUpdateUserProfileApi = (
  options?: UseMutationOptions<User, ServerError, ApiRequest<FormData, number>>,
) => {
  const queryClient = useQueryClient();
  const {onSuccess} = options ?? {};

  return useMutation<User, ServerError, ApiRequest<FormData, number>>(
    (request: ApiRequest<FormData, number>) =>
      queryUser.updateUserProfile(request),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries('user');
        onSuccess?.(data, variables, context);
      },
    },
  );
};

export default useUpdateUserProfileApi;
