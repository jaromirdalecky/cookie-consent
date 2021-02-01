import { CookieStorage } from 'cookie-storage';

/**
 * Store items in CookieStorage.
 */
const Storage = () => {

  const cookieStorage = new CookieStorage({
    path: '/',
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    sameSite: 'Strict'
  });

  const get = (key, value) => cookieStorage.getItem(key, value);
  const set = (key, value) => cookieStorage.setItem(key, value);
  const has = key => cookieStorage.getItem(key) !== null;

  return {
    get,
    set,
    has,
  };

};

export default Storage;
