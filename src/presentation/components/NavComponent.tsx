import { NavLink } from "react-router-dom";
import { routeList } from "../../Router";
import { useState, useEffect } from "react";
import { NavItem } from "./NavItem";

export const NavComponent = () => {
  const [showHambu, setShowHambu] = useState<boolean>(false);
  const [animateOut, setAnimateOut] = useState<boolean>(false);

  useEffect(() => {
    if (!showHambu) {
      setAnimateOut(true);
    } else {
      setAnimateOut(false);
    }
  }, [showHambu]);

  return (
    <nav className="flex container mx-auto w-11/12 justify-between">
      <NavLink to="/" className="text-white">
        Cavitech
      </NavLink>
      <div className="hidden lg:flex lg:gap-9">
        {routeList.map((routeL) => (
          <NavItem key={routeL.path} routeL={routeL} />
        ))}
      </div>
      <div className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowHambu(!showHambu)}
          aria-label="Toggle menu"
          aria-expanded={showHambu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <div className="relative">
          {(showHambu || animateOut) && (
            <div
              className={`absolute right-0 bg-slate-900 rounded-lg flex flex-col w-72 sm:w-96 p-5 ${
                showHambu
                  ? "animate__animated animate__backInDown"
                  : "animate__animated animate__backOutUp"
              }`}
              onAnimationEnd={() => {
                if (!showHambu) {
                  setAnimateOut(false);
                }
              }}
            >
              {routeList.map((routeL) => (
                <NavItem key={routeL.path} routeL={routeL} />
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
