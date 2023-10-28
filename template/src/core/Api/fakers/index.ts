import {randomIntFromInterval} from '@src/utils';

export const fakersDelay = () =>
  new Promise(res => setTimeout(res, randomIntFromInterval(100, 1000)));

export {default as fakerAuth} from './fakerAuth';
export {default as fakerNotifications} from './fakerNotifications';
export {default as fakerUser} from './fakerUser';
