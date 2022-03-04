import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth';

export const Home: React.FC= () => {
  const {signOut} = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  } 
  
  return (
    <div>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}
