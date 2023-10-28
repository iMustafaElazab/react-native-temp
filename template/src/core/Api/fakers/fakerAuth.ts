import type {ApiRequest, LoginBody, User, LogoutResponse} from '@src/core';
import {fakersDelay} from '.';

const getLogMessage = (message: string) => `## fakers::fakerAuth:: ${message}`;

const fakerAuth = {
  login: async (request: ApiRequest<LoginBody>): Promise<User> => {
    console.info(getLogMessage('login'), request);
    await fakersDelay();

    return {
      id: 1,
      name: 'Eslam ElMeniawy',
      email: 'eslam.elmeniawy@gmail.com',
      phone: '+201229977919',
      apiToken: 'some-fake-token',
    };
  },
  logout: async (): Promise<LogoutResponse> => {
    console.info(getLogMessage('logout'));
    await fakersDelay();
    return {message: 'Logout successfully'};
  },
};

export default fakerAuth;
