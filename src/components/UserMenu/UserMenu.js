// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import { Button } from 'react-bootstrap';
import defaultAvatar from 'images/defaultAva.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <img src={defaultAvatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, </span>
      <Button type="button" onClick={() => {}}>
        Log off
      </Button>
    </div>
  );
}
