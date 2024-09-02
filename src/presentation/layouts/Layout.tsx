import { Outlet } from "react-router-dom";

import { NavComponent } from "../components/NavComponent";

export const Layout = () => {
  return (
    <div className="mt-5 ">
      <NavComponent />
      <div className="px-5">
        <Outlet />
      </div>
    </div>
  );
};
