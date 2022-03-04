import React, { createContext, useState } from "react";


interface IAuthContextData {
  isLogged: boolean;
  user: any;
  login: ({email, senha}: IUserData) => void;
  logout(): void;
}

interface IUserData {
  email: string;
  senha: string;
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<IUserData | null>(null);

  const login = ({email, senha}: IUserData) => {
    console.log("login", {
      email,
      senha,
    })
    setUser({ email, senha })
  }

  const logout = () => {

  }

  return(
    <AuthContext.Provider value={{isLogged: !!user, user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
