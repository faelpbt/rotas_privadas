import React, { useContext } from 'react'
import {AuthContext} from '../../contexts/auth'


export const User: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = () => {
    signIn();
  }

  return (
    <div>
      <button onClick={handleSignIn}>Teste</button>
    </div>
  )
}
