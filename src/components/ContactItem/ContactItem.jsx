import PropTypes from 'prop-types';
import useSound from 'use-sound';
import css from './ContactItem.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { patchContact } from 'Redux/contacts/operations';
import btn_snd from '../Sounds/btn_snd.mp3';


export const ContactItem = ({ onDelete, name, number, id }) => {
  const [editContactState, setEditContactState] = useState(false);
  const [currentName, setCurrentName] = useState(name);
  const [currentNumber, setCurrentNumber] = useState(number);

  const dispatch = useDispatch();

  const [play, { stop }] = useSound(btn_snd, { volume: 0.5 });

  const cancelChangeContact = () => {
    setCurrentName(name);
    setCurrentNumber(number);
    setEditContactState(!editContactState);
  };

  const changeStateConponents = () => setEditContactState(!editContactState);

  const handleSubmitFormChangeContact = e => {
    e.preventDefault();
    const contact = {
      name: currentName,
      number: currentNumber,
      id,
    };
    dispatch(patchContact(contact));
  };

  return (
    <form
      className={css.formListContact}
      autoComplete="off"
      onSubmit={handleSubmitFormChangeContact}
    >
      <input
        className={`${
          !editContactState ? css.inputListContact : css.inputListContactEdit
        } ${css.widthName}`}
        type="text"
        name="name"
        onChange={e => setCurrentName(e.currentTarget.value)}
        value={currentName}
        disabled={!editContactState}
        size="300px"
      />
      <input
        className={`${
          !editContactState ? css.inputListContact : css.inputListContactEdit
        } ${css.widthNumber}`}
        type="tel"
        name="number"
        size="300px"
        onChange={e => setCurrentNumber(e.currentTarget.value)}
        value={currentNumber}
        disabled={!editContactState}
      />
      <button
        className={css.btn}
        type={!editContactState ? 'submit' : 'button'}
        onClick={changeStateConponents}
        onMouseEnter={() => {
          play();
        }}
        onMouseLeave={() => {
          stop();
        }}
      >
        {editContactState ? 'Save' : 'Edit'}
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={editContactState ? cancelChangeContact : onDelete}
        onMouseEnter={() => {
          play();
        }}
        onMouseLeave={() => {
          stop();
        }}
      >
        {editContactState ? 'Cancel' : 'Delete'}
      </button>
    </form>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
