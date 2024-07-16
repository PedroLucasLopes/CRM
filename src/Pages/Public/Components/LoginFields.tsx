import React from "react";
import Input from "../../../Components/input";

const LoginFields: React.FC<TState> = ({ setState }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl mb-5">login</p>
      <div>
        <Input label="Email ou Usuário" type="text" onChange={() => {}} />
        <Input label="Senha" type="password" onChange={() => {}} />
      </div>
      <div className="w-72 flex justify-between">
        <button className="opacity-60" onClick={() => setState("password")}>
          Esqueci minha senha
        </button>
        <button className="opacity-60" onClick={() => setState("signup")}>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default LoginFields;
