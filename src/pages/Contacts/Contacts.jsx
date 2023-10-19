import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { fetchContacts } from 'Redux/contacts/operations';

import css from './Contacts.module.css';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
      </HelmetProvider>

      <div className={css.app}>
        <div className={css.wrapper_cotacts_forms}>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2 className={css.title_contacts}>Contacts</h2>
          <Filter />
        </div>
        <ContactList />
      </div>
    </>
  );
}
