import { NavLink } from "react-router-dom";
import { routeList } from "../../Router";

export const NavComponent = () => {
  return (
    <nav className=" lg:flex lg:container lg:mx-auto lg:w-11/12 lg:justify-between ">
      <NavLink to="/" className="text-white">
        Cavitech
      </NavLink>
      <div className="hidden lg:flex lg:gap-9">
        {routeList.map((routeL) => (
          <NavLink
            key={routeL.path}
            to={routeL.path}
            className={({ isActive }) =>
              ` text-lg ${
                isActive ? "text-primary" : ""
              } hover:text-primary transition-colors`
            }
          >
            {routeL.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
