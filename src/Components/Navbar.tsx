import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const regex: RegExp = /(\/management\/)([a-z]*)/gm;
  const match = regex.exec(location.pathname);

  return (
    <>
      <div className="ml-0 md:w-52 lg:w-72 md:flex md:flex-col md:items-center md:justify-center gap-y-20 bg-white shadow-lg animate-moveContainerLeft sm:hidden">
        <Logo />
        <div className="flex flex-col items-center justify-center gap-6">
          <button onClick={() => navigate("/")}>
            <FontAwesomeIcon
              icon={faHouse}
              className={usePathEmphasis("/", "opacity-icon-select-hover")}
            />
          </button>
          <button onClick={() => navigate("/management/timeline")}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassChart}
              className={usePathEmphasis(
                `/management/${match && match[2]}`,
                "opacity-icon-select-hover"
              )}
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
