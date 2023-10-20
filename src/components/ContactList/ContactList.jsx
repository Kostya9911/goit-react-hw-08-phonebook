import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/contacts/operations';
import {
  selectContacts,
  selectVisibleContacts,
} from 'Redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.wrapper_contactList}>
      <p className={css.counterVisibleContacts}>
        {filteredContacts.length}&nbsp;of&nbsp;
        {contacts.length}
      </p>

      <ol className={css.oll}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.contactListItem}>
              <ContactItem
                onDelete={() => {
                  handleDeleteContact(id);
                }}
                name={name}
                number={number}
                id={id}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
