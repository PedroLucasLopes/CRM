import React from "react";
import Input from "../../../Components/InputForm";
import MidTitle from "../../../Components/MidTitle";
import Button from "../../../Components/Button";
import BackArrow from "../../../assets/backarrow";

const PasswordFields: React.FC<TState> = ({ setState }) => {
  return (
    <div className="flex flex-col items-center">
      <MidTitle>Recuperar Senha</MidTitle>
      <div className="mb-8">
        <Input label="Email" type="text" onChange={() => {}} />
        <Input label="Nova Senha" type="password" onChange={() => {}} />
        <Input
          label="Confirmar Nova Senha"
          type="password"
          onChange={() => {}}
        />
      </div>
      <div className="flex flex-col items-center relative">
        <Button onClick={() => {}}>Criar Conta</Button>
        <button
          className="bg-transparent pt-5"
          onClick={() => setState("login")}
        >
          <BackArrow />
        </button>
      </div>
    </div>
  );
};

export default PasswordFields;
