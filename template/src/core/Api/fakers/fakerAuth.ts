import type {ApiRequest, LoginBody, User, LogoutResponse} from '@src/core';
import {randomIntFromInterval} from '@src/utils';

const getLogMessage = (message: string) => `## fakers::fakerAuth:: ${message}`;

const fakerAuth = {
  login: (request: ApiRequest<LoginBody>): Promise<User> => {
    console.info(getLogMessage('login'), request);

    return new Promise(res =>
      setTimeout(
        () => {
          res({
            id: 1,
            name: 'Eslam ElMeniawy',
            email: 'eslam.elmeniawy@gmail.com',
            phone: '+201229977919',
            apiToken: 'Bearer some-fake-token',
          });
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
  logout: (): Promise<LogoutResponse> => {
    console.info(getLogMessage('logout'));

    return new Promise(res =>
      setTimeout(
        () => {
          res({message: 'Logout successfully'});
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
};

export default fakerAuth;
