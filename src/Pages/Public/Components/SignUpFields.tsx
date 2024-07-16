import React from "react";
import Input from "../../../Components/InputForm";
import MidTitle from "../../../Components/MidTitle";
import Button from "../../../Components/Button";
import BackArrow from "../../../assets/backarrow";

const SignUpFields: React.FC<TState> = ({ setState }) => {
  return (
    <div className="flex flex-col items-center mr-5 ml-5">
      <MidTitle>Criar Conta</MidTitle>
      <div className="mb-8">
        <Input label="Nome Completo" type="text" onChange={() => {}} />
        <Input label="Email" type="email" onChange={() => {}} />
        <div className="flex justify-between items-center gap-2">
          <Input label="Senha" type="password" onChange={() => {}} />
          <Input label="Confirmar Senha" type="password" onChange={() => {}} />
        </div>
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

export default SignUpFields;
