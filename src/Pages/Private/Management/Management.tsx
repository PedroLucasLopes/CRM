import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const Management = () => {
  return (
    <>
      <div className="md:w-md-fit-container xl:w-xl-fit-container pr-4 pl-4">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Management;
