import { Outlet } from 'react-router-dom';


import { NavComponent } from '../components/NavComponent';

export const Layout = () => {
  return (
    <div className="mt-5">
      <NavComponent />
      <Outlet />
    </div>
  )
}