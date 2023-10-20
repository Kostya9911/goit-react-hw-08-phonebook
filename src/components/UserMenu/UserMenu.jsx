import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import useSound from 'use-sound';
import btn_snd from '../Sounds/btn_snd.mp3';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [play, { stop }] = useSound(btn_snd, { volume: 0.5 });

  return (
    <div className={css.wrapper}>
      <p className={css.username}> {user.email}</p>
      <button
        className={css.btnLogOut}
        type="button"
        onClick={() => dispatch(logOut())}
        onMouseEnter={() => {
          play();
        }}
        onMouseLeave={() => {
          stop();
        }}
      >
        Logout
      </button>
    </div>
  );
};
