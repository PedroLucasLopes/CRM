import React from "react";
import Input from "../../../Components/input";

const PasswordFields = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl mb-5">login</p>
      <div>
        <Input label="Email" type="text" onChange={() => {}} />
        <Input label="Nova Senha" type="password" onChange={() => {}} />
        <Input
          label="Confirmar Nova Senha"
          type="password"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default PasswordFields;
