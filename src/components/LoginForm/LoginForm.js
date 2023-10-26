import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  ErrMessage,
  Label,
  StyledForm,
  Button,
  Input,
} from './LoginForm.styled';

const LogInSchema = Yup.object().shape({
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

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handlerSubmit = (values, actions) => {
    dispatch(logIn(values));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LogInSchema}
      onSubmit={handlerSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <StyledForm>
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
              Log In
            </Button>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};
