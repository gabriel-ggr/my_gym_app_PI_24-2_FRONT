import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Cria o contexto
export const UserContext = createContext();

// Default User
const defaultUser = {
  nome: '',
  email: '',
  id: null
}

// Provedor do contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  console.log('User provider inicializado', { user })
  
  const logout = async () => {
    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem('@auth_token'); // remove o token do async
  }

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);