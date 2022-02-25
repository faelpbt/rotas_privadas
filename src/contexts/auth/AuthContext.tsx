import { createContext, useCallback } from "react"
import { api } from "../../services/Api/api";

interface IAuthContextState {
  token: string;
  signIn({username, password}: IUserData): Promise<void>;
}

interface IUserData {
  username: string;
  password: string;
}

export const AuthContext = createContext<IAuthContextState>({} as IAuthContextState);

export const AuthProvider: React.FC = ({children}) => {

  const signIn = useCallback( async ({ username, password }: IUserData) => {
    const response = await api().post('/users', {
      username,
      password
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ token: 'token', signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
