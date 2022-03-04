import React from "react";
import './style/LoginStyle.css'

export const Login: React.FC = () => {
  return(
    <div className="form">
      <h1 className="">Login no Sistema</h1>
      <form className="form-div">
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
