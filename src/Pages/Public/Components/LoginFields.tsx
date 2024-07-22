import React from "react";
import MidTitle from "../../../Components/MidTitle";
import Input from "../../../Components/InputForm";
import Button from "../../../Components/Button";

const LoginFields: React.FC<TState> = ({ setState }) => {
  return (
    <div className="flex-col-items animate-moveContainerRight">
      <MidTitle>Login</MidTitle>
      <div className="sm:w-80 md:w-auto xl:w-auto 2xl:w-auto">
        <Input label="Email ou Usuário" type="text" onChange={() => {}} />
        <Input label="Senha" type="password" onChange={() => {}} />
      </div>
      <div className="w-72 flex justify-between mb-10">
        <button
          className="mid-opaticy-menu-button"
          onClick={() => setState("password")}
        >
          Esqueci minha senha
        </button>
        <button
          className="mid-opaticy-menu-button"
          onClick={() => setState("signup")}
        >
          Cadastrar
        </button>
      </div>
      <Button onClick={() => {}}>Entrar</Button>
    </div>
  );
};

export default LoginFields;
