import { NavLink } from 'react-router-dom';
import { RouteList } from '../../Router';

export const NavItem = ({routeL}: {routeL: RouteList}) => {
  return (
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
  );
};
