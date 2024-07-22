import { ReactNode, useState } from "react";
import LoginAsset from "../../assets/LoginAsset";
import LoginFields from "./Components/LoginFields";
import SignUpFields from "./Components/SignUpFields";
import PasswordFields from "./Components/PasswordFields";
import Waves from "../../assets/waves";

const Login = () => {
  const [changePage, setChangePage] = useState<"login" | "password" | "signup">(
    "login"
  );

  const pageComponents: {
    [key in "login" | "password" | "signup"]: ReactNode;
  } = {
    login: <LoginFields setState={setChangePage} />,
    password: <PasswordFields setState={setChangePage} />,
    signup: <SignUpFields setState={setChangePage} />,
  };

  return (
    <div className="relative">
      <Waves />
      <div className="min-h-screen flex items-center justify-center sm:bg-loginImage md:bg-none animate-changeOpacity">
        <div className="max-w-screen-2xl max-h-screen sm:p-5 md:p-0 sm:w-full sm:ml-10 sm:mr-10 sm:h-auto xl:w-128 xl:h-128 rounded-lg sm:bg-offwhite md:bg-white shadow-lg">
          <div className="flex h-full">
            <div className="sm:m-auto md:w-1/2 md:p-5 xl:w-1/3 md:flex md:justify-center md:items-center">
              {pageComponents[changePage]}
            </div>
            <div className="sm:hidden md:block md:w-1/2 xl:w-2/3 h-auto">
              <LoginAsset />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
