import { useCookies } from "react-cookie";
import Logo from "../assets/Logo";
import Exit from "../assets/exit";

const Navbar = () => {
  const [, , removeCookie] = useCookies(["@CRM:token", "@CRM:user"]);
  return (
    <>
      <div className="ml-0 md:w-52 xl:w-72 flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm">
        <Logo />
        <button
          onClick={() => {
            removeCookie("@CRM:token", {
              path: "/",
              sameSite: "lax",
              secure: true,
            });
            removeCookie("@CRM:user", {
              path: "/",
              sameSite: "lax",
              secure: true,
            });
          }}
        >
          <Exit />
        </button>
      </div>
    </>
  );
};

export default Navbar;
