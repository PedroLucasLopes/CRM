import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../Pages/Public/Login";
import SignUp from "../Pages/Public/SignUp";
import Dashboard from "../Pages/Private/Dashboard";
import PublicRoutes from "./Providers/PublicRoutes";
import PrivateRoutes from "./Providers/PrivateRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </>
  )
);

const RoutesProvider = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvider;
