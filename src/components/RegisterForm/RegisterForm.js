import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { ErrMessage } from './RegisterForm.styled';
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
          <form>
            <label>
              Username
              <input type="text" name="name" />
              <ErrMessage name="name" component="div" />
            </label>
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
              Register
            </button>
          </form>
        </>
      )}
    </Formik>
  );
};
