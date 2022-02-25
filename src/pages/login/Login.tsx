import { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../../contexts';
import './styles/styleLogin.css'

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      await signIn({username, password});
  }, [username, password])

  return(
    <form className="form" onSubmit={handleSubmit}>

      <h2>Login</h2>

      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="">Senha</label>
        <input
         type="password"
         onChange={e => setPassword(e.target.value)}
         />
      </div>

      <div>
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
}
