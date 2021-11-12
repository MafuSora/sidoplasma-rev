import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  isPMI: null,
  Jenis:null,
  Nama: null,

  login: () => {},
  logout: () => {},
});
