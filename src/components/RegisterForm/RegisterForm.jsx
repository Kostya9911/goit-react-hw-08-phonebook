import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/operations';
import useSound from 'use-sound';
import css from './RegisterForm.module.css';
import btn_snd from '../Sounds/btn_snd.mp3';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [play, { stop }] = useSound(btn_snd, { volume: 0.5 });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      className={css.formRegister}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className={css.labelRegister}>
        Username
        <input className={css.inputRegister} type="text" name="name" />
      </label>
      <label className={css.labelRegister}>
        Email
        <input className={css.inputRegister} type="email" name="email" />
      </label>
      <label className={css.labelRegister}>
        Password
        <input className={css.inputRegister} type="password" name="password" />
      </label>
      <button
        className={css.btnRegister}
        type="submit"
        onMouseEnter={() => {
          play();
        }}
        onMouseLeave={() => {
          stop();
        }}
      >
        Register
      </button>
    </form>
  );
};
