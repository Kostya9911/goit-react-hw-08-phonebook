import { useEffect } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { Helmet } from 'react-helmet';

// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

// import { selectLoading } from 'redux/tasks/selectors';
import { fetchContacts } from 'Redux/contacts/operations';

import css from '../components/App/App.module.css';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {/* <div>{isLoading && 'Request in progress...'}</div> */}
        <ContactList />
      </div>
    </>
  );
}
