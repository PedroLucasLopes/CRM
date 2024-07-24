import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlassChart,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo";
import usePathEmphasis from "../hooks/usePathEmphasis";

const Navbar = () => {
  const [, , removeCookie] = useCookies(["@CRM:token", "@CRM:user"]);
  const navigate = useNavigate();

  return (
    <>
      <div className="ml-0 md:w-52 xl:w-72 flex flex-col items-center justify-center gap-y-20 bg-white shadow-lg animate-moveContainerLeft">
        <Logo />
        <div className="flex flex-col items-center justify-center gap-6">
          <button onClick={() => navigate("/")}>
            <FontAwesomeIcon
              icon={faHouse}
              className={`opacity-icon-select-hover ${usePathEmphasis("/")}`}
            />
          </button>
          <button onClick={() => navigate("/management")}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassChart}
              className={`opacity-icon-select-hover ${usePathEmphasis(
                "/management"
              )}`}
            />
          </button>
        </div>
        <button
          onClick={() => {
            removeCookie("@CRM:token");
            removeCookie("@CRM:user");
          }}
        >
          <FontAwesomeIcon
            icon={faPowerOff}
            className="opacity-icon-select-hover"
          />
        </button>
      </div>
    </>
  );
};

export default Navbar;
