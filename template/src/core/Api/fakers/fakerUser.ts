import type {User, ApiRequest} from '@src/core';
import {randomIntFromInterval} from '@src/utils';

const getLogMessage = (message: string) => `## fakers::fakerUser:: ${message}`;

const fakerUser = {
  getUserDetails: (): Promise<User> => {
    console.info(getLogMessage('getUserDetails'));

    return new Promise(res =>
      setTimeout(
        () => {
          res({
            id: 1,
            name: 'Eslam ElMeniawy',
            email: 'eslam.elmeniawy@gmail.com',
            phone: '+201229977919',
            apiToken: 'Bearer some-fake-token',
            fcmToken: 'some-fake-FCM-token',
          });
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
  updateUserProfile: (request: ApiRequest<FormData, number>): Promise<User> => {
    console.info(getLogMessage('updateUserProfile'), request);

    return new Promise(res =>
      setTimeout(
        () => {
          res({
            id: 1,
            name: 'Eslam ElMeniawy',
            email: 'eslam.elmeniawy@gmail.com',
            phone: '+201229977919',
            apiToken: 'Bearer some-fake-token',
            fcmToken: 'some-fake-FCM-token',
          });
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
};

export default fakerUser;
