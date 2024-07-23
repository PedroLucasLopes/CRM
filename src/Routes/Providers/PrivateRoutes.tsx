import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PrivateLayout from "../../Layouts/PrivateLayout";
import { useCookies } from "react-cookie";

const PrivateRoute: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [cookies] = useCookies(["@CRM:token", "@CRM:user"]);

  const [validated, setValidated] = useState(false);

  const onPrivateNavigate = useCallback(() => {
    const user = cookies["@CRM:token"];
    const token = cookies["@CRM:user"];

    if (!user || !token) {
      navigate("/login");
    }

    setValidated(true);
  }, [cookies, navigate]);

  useEffect(() => {
    onPrivateNavigate();
  }, [onPrivateNavigate, pathname]);

  if (!validated) return null;
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export default PrivateRoute;
