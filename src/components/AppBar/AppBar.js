import s from './AppBar.module.css';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
// import { authSelectors } from '../redux/auth';

export default function AppBar() {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <AuthNav />
      <UserMenu />
    </header>
  );
}
