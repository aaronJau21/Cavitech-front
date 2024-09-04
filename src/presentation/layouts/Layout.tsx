import { Outlet } from "react-router-dom";

import { NavComponent } from "../components/NavComponent";

export const Layout = () => {
  return (
    <div className="pt-5 bg-gradient-to-br from-secundary to-slate-900 to-55% text-white overflow-y-scroll h-screen">
      <NavComponent />
      <div className="px-5  ">
        <Outlet />
      </div>
    </div>
  );
};
