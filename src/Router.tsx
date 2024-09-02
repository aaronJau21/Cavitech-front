import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Blog, Contact, Home, Layout, Services } from "./presentation";

export interface RouteList {
  title: string;
  path: string;
  element: () => JSX.Element;
  index: boolean;
}

export const routeList: RouteList[] = [
  {
    path: "/",
    title: "Home",
    element: Home,
    index: true,
  },
  {
    path: "/about",
    title: "About",
    element: About,
    index: false,
  },
  {
    path: "/services",
    title: "Services",
    element: Services,
    index: false,
  },
  {
    path: "/blog",
    title: "Blog",
    element: Blog,
    index: false,
  },
  {
    path: "/contact",
    title: "Contact",
    element: Contact,
    index: false,
  },
];

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routeList.map((routeL) => (
            <Route
              key={routeL.path}
              element={<routeL.element />}
              path={routeL.path}
              index={routeL.index}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
