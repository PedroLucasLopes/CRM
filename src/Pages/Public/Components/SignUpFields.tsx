import { useState, FocusEvent } from "react";
import Input from "../../../Components/InputForm";
import MidTitle from "../../../Components/MidTitle";
import Button from "../../../Components/Button";
import BackArrow from "../../../assets/backarrow";

const SignUpFields: React.FC<TState> = ({ setState }) => {
  const [signUp, setSignUp] = useState<ISignUp>({} as ISignUp);

  return (
    <div className="flex-col-items mr-5 ml-5 animate-moveContainerLeft">
      <form className="flex-col-items">
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
          <Input
            label="Nome Completo"
            type="text"
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              setSignUp({ ...signUp, fullname: e.target.value });
            }}
          />
          <Input
            label="Email"
            type="email"
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              setSignUp({ ...signUp, email: e.target.value });
            }}
          />
          <div className="flex justify-between items-center gap-2">
            <Input
              label="Senha"
              type="password"
              onBlur={(e: FocusEvent<HTMLInputElement>) => {
                setSignUp({ ...signUp, password: e.target.value });
              }}
            />
            <Input
              label="Confirmar Senha"
              type="password"
              onBlur={(e: FocusEvent<HTMLInputElement>) => {
                e.target.value === signUp.password ? "" : "";
              }}
            />
          </div>
        </div>
        <Button onClick={() => setState("login")}>Criar Conta</Button>
      </form>
    </div>
  );
};

export default SignUpFields;
