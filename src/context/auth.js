import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { getUser } from '../api/auth';
import SystemServices from '../api/SystemServices';

function AuthProvider(props) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const result = await getUser();
      if (result.isOk) {
        console.log('AuthUserData', result.data);
        setUser(result.data);
      }
      setLoading(false);
    })();
  }, []);

  const signIn = useCallback(async (username, password) => {
    const result = await SystemServices.Login(username, password);
    if (result.isOk) {
      console.log('AuthUserData', result.data);
      setUser(result.data);
    }
    return result;
  }, []);

  const signOut = useCallback(async () => {
    //setUser();
    await SystemServices.Logout();
  }, []);


  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }} {...props} />
  );
}

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth, AuthContext }
