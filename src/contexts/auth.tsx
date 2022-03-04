import React, { createContext, useState } from "react";
import * as auth from '../services/Auth/auth'
import { IUserData, UserLogado } from '../services/axios/user/UserInfo'

interface IAuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<IUserData[]>([]);

  async function signIn() {
    const response = await UserLogado.getUserInfo();

    setUser(response.user);
  }

  function signOut() {
    setUser([]);
  }

  return(
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}
