import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const Management = () => {
  return (
    <>
      <div className="md:w-md-fit-container w-full h-auto xl:w-xl-fit-container pr-4 pl-4 mt-3">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Management;
