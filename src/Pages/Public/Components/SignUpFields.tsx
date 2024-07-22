import React from "react";
import Input from "../../../Components/InputForm";
import MidTitle from "../../../Components/MidTitle";
import Button from "../../../Components/Button";
import BackArrow from "../../../assets/backarrow";

const SignUpFields: React.FC<TState> = ({ setState }) => {
  return (
    <div className="flex-col-items mr-5 ml-5 animate-moveContainerLeft">
      <div className="flex items-center relative">
        <button
          className="bg-transparent absolute -left-10"
          onClick={() => setState("login")}
        >
          <BackArrow />
        </button>
        <MidTitle>Criar Conta</MidTitle>
      </div>
      <div className="mb-8 pt-5 sm:w-80 md:w-auto">
        <Input label="Nome Completo" type="text" onChange={() => {}} />
        <Input label="Email" type="email" onChange={() => {}} />
        <div className="flex justify-between items-center gap-2">
          <Input label="Senha" type="password" onChange={() => {}} />
          <Input label="Confirmar Senha" type="password" onChange={() => {}} />
        </div>
      </div>
      <div className="flex-col-items relative">
        <Button onClick={() => {}}>Criar Conta</Button>
      </div>
    </div>
  );
};

export default SignUpFields;
