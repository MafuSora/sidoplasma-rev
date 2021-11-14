import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {
  const [token, setToken] = useState();

  const login = useCallback((token) => {
    console.log(token);
    setToken(token);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        token,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (!storedData) {
      return;
    }

    login(storedData.token);
  }, []);

  return {
    login,
    logout,
    token,
  };
};
