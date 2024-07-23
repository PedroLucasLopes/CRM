import React from "react";
import Input from "../../../Components/InputForm";
import MidTitle from "../../../Components/MidTitle";
import Button from "../../../Components/Button";
import BackArrow from "../../../assets/backarrow";

const PasswordFields: React.FC<TState> = ({ setState }) => {
  return (
    <div className="flex flex-col justify-center items-center animate-moveContainerLeft">
      <div className="flex items-center relative">
        <button
          className="bg-transparent absolute -left-10"
          onClick={() => setState("login")}
        >
          <BackArrow />
        </button>
        <MidTitle>Recuperar Senha</MidTitle>
      </div>
      <div className="mb-8 pt-5 sm:w-80 md:w-auto">
        <Input label="Email" type="text" onBlur={() => {}} />
        <Input label="Nova Senha" type="password" onBlur={() => {}} />
        <Input label="Confirmar Nova Senha" type="password" onBlur={() => {}} />
      </div>
      <Button onClick={() => {}}>Recuperar Senha</Button>
    </div>
  );
};

export default PasswordFields;
