import { ContactForm } from 'components/ContactForm/ContactForm';
import { Wrapper } from 'components/ContactForm/ContactForm.styled';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Error } from 'components/Error/Error.styled';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <Wrapper>
      <Helmet>
        <title>Your contact list</title>
      </Helmet>
      <ContactForm />
      {isLoading && <Loader />}
      <Filter />
      {!error && !isLoading && <ContactList />}
      {error && (
        <Error>Oops! Something went wrong. Please reload the page.</Error>
      )}
    </Wrapper>
  );
}
