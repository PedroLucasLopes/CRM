import { useState, FocusEvent } from "react";
import Input from "../../../Components/InputForm";
import MidTitle from "../../../Components/MidTitle";
import Button from "../../../Components/Button";
import BackArrow from "../../../assets/backarrow";

const PasswordFields: React.FC<TState> = ({ setState }) => {
  const [recoverPassword, setRecoverPassword] = useState<IRecoverPassword>(
    {} as IRecoverPassword
  );
  return (
    <div className="animate-moveContainerLeft">
      <form className="flex flex-col justify-center items-center">
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
          <Input
            label="Email"
            type="text"
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              setRecoverPassword({ ...recoverPassword, email: e.target.value });
            }}
          />
          <Input
            label="Nova Senha"
            type="password"
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              setRecoverPassword({
                ...recoverPassword,
                password: e.target.value,
              });
            }}
          />
          <Input
            label="Confirmar Nova Senha"
            type="password"
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              e.target.value === recoverPassword.password ? "" : "";
            }}
          />
        </div>
        <Button
          onClick={() => {
            setState("login");
          }}
        >
          Recuperar Senha
        </Button>
      </form>
    </div>
  );
};

export default PasswordFields;
