import { ReactNode, useState } from "react";
import LoginAsset from "../../assets/login";
import CrmLogo from "../../assets/crmlogo";
import LoginFields from "./Components/LoginFields";
import SignUpFields from "./Components/SignUpFields";
import PasswordFields from "./Components/PasswordFields";

const Login = () => {
  const [changePage, setChangePage] = useState<"login" | "password" | "signup">(
    "login"
  );

  const pageComponents: {
    [key in "login" | "password" | "signup"]: ReactNode;
  } = {
    login: <LoginFields setState={setChangePage} />,
    password: <PasswordFields />,
    signup: <SignUpFields setState={setChangePage} />,
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="xl:w-128 xl:h-128 sm:w-auto sm:h-auto rounded-lg bg-white shadow-lg">
        <div className="flex">
          <div className="w-1/3 h-full m-auto">
            {pageComponents[changePage]}
            <CrmLogo />
          </div>
          <div className="w-2/3">
            <LoginAsset />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
