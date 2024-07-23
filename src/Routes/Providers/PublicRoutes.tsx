import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PublicLayout from "../../Layouts/PublicLayout";
import { useCookies } from "react-cookie";

const PublicRoutes: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [cookies, removeCookie] = useCookies(["@CRM:token", "@CRM:user"]);

  const [validated, setValidated] = useState(false);

  const onPublicNavigate = useCallback(() => {
    const user = cookies["@CRM:token"];
    const token = cookies["@CRM:user"];

    if (user && token) {
      return navigate("/");
    }

    removeCookie;
    setValidated(true);
  }, [cookies, navigate, removeCookie]);

  useEffect(() => {
    onPublicNavigate();
  }, [onPublicNavigate, pathname]);

  if (!validated) return null;
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
};

export default PublicRoutes;
