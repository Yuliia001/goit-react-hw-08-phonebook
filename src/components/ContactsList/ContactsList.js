import { ListItem, Text, Title } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { filteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);

  return (
    <>
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
              <p> {name} :</p>
              <span> {number}</span>
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </ListItem>
          ))}
        </ul>
      ) : (
        <Text>Contact list ist empty!</Text>
      )}
    </>
  );
};
