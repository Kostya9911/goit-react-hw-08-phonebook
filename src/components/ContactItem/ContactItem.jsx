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

  const [play, { stop }] = useSound(btn_snd, { volume: 1 });
  // const [isHovering, setIsHovering] = useState(false);

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
    changeStateConponents();
  };

  return (
    <div className={css.item}>
      {editContactState && (
        <form autoComplete="off" onSubmit={handleSubmitFormChangeContact}>
          <input
            type="text"
            name="name"
            onChange={e => setCurrentName(e.currentTarget.value)}
            value={currentName}
          />

          <input
            type="tel"
            name="number"
            onChange={e => setCurrentNumber(e.currentTarget.value)}
            value={currentNumber}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={cancelChangeContact}>
            Cancel
          </button>
        </form>
      )}
      <div className={css.equal}>
        {!editContactState && (
          <div className={css.wrapper_contact_date}>
            <div className={css.wrapper_contact_date}>
              <p>{name}:</p>
              <p>{number}</p>
            </div>

            <button
              className={css.btn}
              form="data"
              type="submit"
              onClick={changeStateConponents}
              onMouseEnter={() => {
                play();
              }}
            >
              Edit
            </button>
          </div>
        )}

        <button
          className={css.btn}
          type="button"
          onClick={onDelete}
          onMouseEnter={() => {
            play();
          }}
          // onMouseLeave={() => {
          //   stop();
          // }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
