import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/auth/operations';
import useSound from 'use-sound';
import css from './LoginForm.module.css';
import btn_snd from '../Sounds/btn_snd.mp3';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const [play, { stop }] = useSound(btn_snd, { volume: 0.5 });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.formLogIn} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.labelLogIn}>
        Email
        <input className={css.inputLogIn} type="email" name="email" />
      </label>
      <label className={css.labelLogIn}>
        Password
        <input className={css.inputLogIn} type="password" name="password" />
      </label>
      <button
        className={css.btnLogIn}
        type="submit"
        onMouseEnter={() => {
          play();
        }}
        onMouseLeave={() => {
          stop();
        }}
      >
        Log In
      </button>
    </form>
  );
};
