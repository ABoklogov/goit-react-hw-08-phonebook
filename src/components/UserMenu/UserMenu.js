// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);
  //   const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span className={s.name}>Добро пожаловать,</span>
      <button type="button" onClick={() => {}}>
        Выйти
      </button>
    </div>
  );
}
