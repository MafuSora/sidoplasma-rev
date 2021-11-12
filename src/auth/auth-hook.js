import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {
  const [isAdmin, setIsAdmin] = useState();
  const [jenis, setJenis] = useState(false);
  const [nama, setNama] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(
    (jenis, nama, isAdmin,isLoggedIn) => {
      console.log(jenis,nama)
      setNama(nama);
      setJenis(jenis);
      setIsAdmin(isAdmin);
      setIsLoggedIn(isLoggedIn);

      console.log(isLoggedIn);

      localStorage.setItem(
        'userData',
        JSON.stringify({
          nama,
          jenis,
          isAdmin,
          isLoggedIn,
        })
      );
    },
    [isLoggedIn]
  );

  const logout = useCallback(() => {
    setNama(null);
    setJenis(null);
    setIsAdmin(null);
    setIsLoggedIn(false);
    console.log('LOGOUT CALLED');
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    console.log(storedData, 'FIRSRT CALL');
    if (!storedData) {
      return;
    }
    
    console.log(storedData);
    login(
      storedData.nama,
      storedData.jenis,
      storedData.isAdmin,
      storedData.isLoggedIn
    );
  }, []);

  return {
    isAdmin,
    login,
    logout,
    nama,
    jenis,
    isLoggedIn,
    };
};
