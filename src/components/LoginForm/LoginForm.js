import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ErrMessage } from './LoginForm.styled';

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

  const handlerSubmitForm = (values, actions) => {
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
      onSubmit={handlerSubmitForm}
    >
      {({ isSubmitting }) => (
        <>
          <form>
            <label>
              Email
              <input type="email" name="email" />
              <ErrMessage name="number" component="div" />
            </label>
            <label>
              Password
              <input type="password" name="password" />
              <ErrMessage name="name" component="div" />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Log In
            </button>
          </form>
        </>
      )}
    </Formik>
  );
};
