import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../Pages/Public/Login";
import Dashboard from "../Pages/Private/Dashboard/Dashboard";
import PublicRoutes from "./Providers/PublicRoutes";
import PrivateRoutes from "./Providers/PrivateRoutes";
import Management from "../Pages/Private/Management/Management";
import TimeLine from "../Pages/Private/Management/Pages/TimeLine";
import Panel from "../Pages/Private/Management/Pages/Panel";
import Backlog from "../Pages/Private/Management/Pages/Backlog";
import Items from "../Pages/Private/Management/Pages/Items";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Dashboard />} />
        <Route element={<Management />}>
          <Route path="/management/timeline" element={<TimeLine />} />
          <Route path="/management/panel" element={<Panel />} />
          <Route path="/management/backlog" element={<Backlog />} />
          <Route path="/management/items" element={<Items />} />
        </Route>
      </Route>
    </>
  )
);

const RoutesProvider = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvider;
