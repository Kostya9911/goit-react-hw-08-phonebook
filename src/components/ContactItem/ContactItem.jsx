import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ onDelete, name, number, id }) => {
  const [buttonState, setButtonState] = useState(false);
  // const [buttonType, setButtonType] = useState('button');
  const [buttonName, setButtonName] = useState(false);
  const [curName, setCurName] = useState(name);
  const [curNumber, setCurNumber] = useState(number);

  const dispatch = useDispatch();

  const cancelChangeContact = () => {
    setCurName(name);
    setCurNumber(number);
    setButtonState(!buttonState);
  };

  const handleSubmitFormChangeContact = e => {
    e.preventDefault();
    const contact = {
      name: curName,
      number: curNumber,
      id,
    };
    setButtonState(false);
    console.log(contact);
  };
  const handleEditContact = e => {
    e.preventDefault();

    setButtonState(!buttonState);
    setButtonName(!buttonName);
    // setButtonType('submit');
  };
  return (
    <div className={css.item}>
      {buttonState ? (
        <form
          // id="data"
          autoComplete="off"
          onSubmit={handleSubmitFormChangeContact}
        >
          <input
            type="text"
            name="name"
            onChange={e => setCurName(e.currentTarget.value)}
            value={curName}
          />

          <input
            type="tel"
            name="number"
            onChange={e => setCurNumber(e.currentTarget.value)}
            value={curNumber}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={cancelChangeContact}>
            Cancel
          </button>
        </form>
      ) : (
        <p>{name}:</p>
      )}

      <div className={css.equal}>
        {!buttonState && (
          <>
            <p>{number}</p>
            <button
              className={css.delete}
              // form="data"
              type="button"
              // {buttonType}
              onClick={handleEditContact}
            >
              Edit
            </button>
          </>
        )}

        <button className={css.delete} type="button" onClick={onDelete}>
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
