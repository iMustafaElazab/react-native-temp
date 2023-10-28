import type {User, ApiRequest} from '@src/core';
import {fakersDelay} from '.';

const getLogMessage = (message: string) => `## fakers::fakerUser:: ${message}`;

const fakerUser = {
  getUserDetails: async (): Promise<User> => {
    console.info(getLogMessage('getUserDetails'));
    await fakersDelay();

    return {
      id: 1,
      name: 'Eslam ElMeniawy',
      email: 'eslam.elmeniawy@gmail.com',
      phone: '+201229977919',
    };
  },
  updateUserProfile: async (
    request: ApiRequest<FormData, number>,
  ): Promise<User> => {
    console.info(getLogMessage('updateUserProfile'), request);
    await fakersDelay();

    return {
      id: 1,
      name: 'Eslam ElMeniawy',
      email: 'eslam.elmeniawy@gmail.com',
      phone: '+201229977919',
    };
  },
};

export default fakerUser;
