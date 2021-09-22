import { useSelector } from 'react-redux';
import s from './AppBar.module.css';
import { authSelectors } from 'redux/auth';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { NavLink } from 'react-router-dom';
export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <NavLink to="/contacts" exact>
        contacts
      </NavLink>
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
}
