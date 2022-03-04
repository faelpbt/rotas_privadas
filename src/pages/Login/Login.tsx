import React, { useState, useContext } from "react";

import { AuthContext, IUserData } from "../../contexts/auth";

import './style/LoginStyle.css'

export const Login: React.FC = () => {
  const { isLogged, login } = useContext(AuthContext);

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit', { email, senha })

    login(email, senha);
  }

  return(
    <div className="form">
      <h1 className="">Login no Sistema</h1>
      <form className="form-div" onSubmit={handleSubmit}>
        <div className="div-form">
          <label className="">E-mail</label>
          <input className="" type="email" />
        </div>
        <div className="div-form">
          <label className="">Senha</label>
          <input className="" type="password" />
        </div>
        <div className="div-form">
          <button className="">Entrar</button>
        </div>
      </form>
    </div>
  );

}
