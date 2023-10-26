import { ContactForm } from './Form/ContactForm';
import { ContactList } from './Contacts/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout.styled';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <ContactForm />
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
      {error && (
        <Error>Oops! Something went wrong. Please reload the page.</Error>
      )}
      <GlobalStyle />
    </Layout>
  );
};
