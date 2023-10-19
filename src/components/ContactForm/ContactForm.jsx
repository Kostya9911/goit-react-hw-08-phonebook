// import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/contacts/operations';
import { selectContacts } from 'Redux/contacts/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const isExist = contacts.find(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const contact = {
      // id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(contact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.name.value;
    const number = evt.currentTarget.number.value;
    handleAddContact(name, number);
    evt.currentTarget.reset();
  };

  return (
    <form
      className={css.contact_form}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label className={css.contact_form_label}>
        Name
        <input
          className={css.contact_form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.contact_form_label}>
        Number
        <input
          className={css.contact_form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.btn_add}>
        Add contact
      </button>
    </form>
  );
};
