import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  Button,
  ErrMessage,
  Input,
  Label,
  StyledForm,
} from './RegisterForm.styled';
import { register } from 'redux/auth/operations';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters.'
    )
    .required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handlerSubmitForm = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={handlerSubmitForm}
    >
      {({ isSubmitting }) => (
        <>
          <StyledForm>
            <Label>
              Username
              <Input type="text" name="name" />
              <ErrMessage name="name" component="div" />
            </Label>
            <Label>
              Email
              <Input type="email" name="email" />
              <ErrMessage name="number" component="div" />
            </Label>
            <Label>
              Password
              <Input type="password" name="password" />
              <ErrMessage name="name" component="div" />
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};
