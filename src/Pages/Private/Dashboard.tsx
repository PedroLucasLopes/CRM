import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [, , removeCookie] = useCookies(["@CRM:token", "@CRM:user"]);

  return (
    <button
      onClick={() => {
        removeCookie("@CRM:token");
        removeCookie("@CRM:user");
      }}
    >
      Sair
    </button>
  );
};

export default Dashboard;
