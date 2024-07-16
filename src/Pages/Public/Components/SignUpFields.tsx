import React from "react";
import Input from "../../../Components/input";

const SignUpFields: React.FC<TState> = ({ setState }) => {
  return (
    <div className="flex flex-col items-center mr-5 ml-5">
      <p className="text-3xl mb-5">login</p>
      <div>
        <Input label="Nome Completo" type="text" onChange={() => {}} />
        <Input label="Email" type="email" onChange={() => {}} />
        <div className="flex justify-between items-center gap-2">
          <Input label="Senha" type="password" onChange={() => {}} />
          <Input label="Confirmar Senha" type="password" onChange={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default SignUpFields;
