import { Api } from '../API';
import { ApiException } from '../ErrorExeption';

export interface IUserData {
  Email: string;
  Senha: string;
}

export const getUserInfo = async (): Promise<IUserData[] | ApiException> => {
  try {
    const { data } = await Api().get('/users');
    return data;
  } catch (error: any) {
    return new ApiException(error.massage || 'Erro na requisição')
  }
};

export const getUserCadastro = async (): Promise<IUserData[] | ApiException> => {
  try {
    const { data } = await Api().post('/users');
    return data;
  } catch (error: any) {
    return new ApiException(error.massage || 'Usuario não cadastrado')
  }
};

export const UserLogado = {
  getUserInfo,
  getUserCadastro
};
