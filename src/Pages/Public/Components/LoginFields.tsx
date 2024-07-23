import { useState, FocusEvent } from "react";
import MidTitle from "../../../Components/MidTitle";
import Input from "../../../Components/InputForm";
import Button from "../../../Components/Button";
import { useCookies } from "react-cookie";

const LoginFields: React.FC<TState> = ({ setState }) => {
  const [login, setLogin] = useState<ILogin>({} as ILogin);
  const [, setCookies] = useCookies(["@CRM:token", "@CRM:user"]);

  return (
    <div className="animate-moveContainerRight">
      <MidTitle>Login</MidTitle>
      <form className="flex-col-items">
        <div className="sm:w-80 md:w-auto xl:w-auto 2xl:w-auto">
          <Input
            label="Email ou Usuário"
            type="text"
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              setLogin({ ...login, username: e.target.value });
            }}
          />
          <Input
            label="Senha"
            type="password"
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              setLogin({ ...login, password: e.target.value });
            }}
          />
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
        <Button
          onClick={() => {
            setCookies("@CRM:user", login);
            setCookies("@CRM:token", login);
          }}
        >
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default LoginFields;
