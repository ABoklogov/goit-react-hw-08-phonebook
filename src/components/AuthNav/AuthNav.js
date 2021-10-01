import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  const location = useLocation();

  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={location.pathname === '/' ? s.activeHomeLink : s.link}
        activeClassName={s.activelink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activelink}
      >
        Login
      </NavLink>
    </div>
  );
}
