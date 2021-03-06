import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { tryLogin, trySignup } from './Auth.actions';
import { LOGIN, SIGNUP } from './Auth.constants';
import Title from '../Titles/Title';
import Loader from '../Loader/Loader';
import Link from '../Link/Link';
import ButtonGroup from '../Button/ButtonGroup';

function Login() {
  const [panel, setPanel] = useState(LOGIN);
  const switchPanel = () =>
    panel === LOGIN ? setPanel(SIGNUP) : setPanel(LOGIN);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email must be a valid email')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    }),
    validateOnChange: true,
    onSubmit: values => {
      panel === LOGIN
        ? dispatch(tryLogin(values))
        : dispatch(trySignup(values));
    },
  });
  return (
    <React.Fragment>
      <div className="mb-4 text-md md:text-lg"> Create your own Quizzes </div>
      <div className="shadow-md rounded-sm bg-white p-2 md:p-4 py-2 md:py-4 w-4/5 max-w-xl flex flex-col">
        <Loader active={loading} />
        <div className="text-center">
          <Title>{panel}</Title>
        </div>
        <form
          className="m-auto flex-auto bg-white p-2 w-full rounded-lg"
          onSubmit={formik.handleSubmit}
        >
          <Input
            focus
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="abc123@gmail.com"
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
          />
          <Input
            label="Password"
            type="password"
            placeholder="**********"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
          />
          <div className="flex mb-0">
            <ButtonGroup>
              <Button type="reset" outlined onClick={() => formik.resetForm()}>
                Clear
              </Button>
              <Button
                className="md:ml-2"
                disabled={!formik.isValid}
                type="submit"
              >
                {panel === LOGIN ? 'Login' : 'Signup'}
              </Button>
            </ButtonGroup>
          </div>
          <div className="text-right mt-1 md:mt-2">
            <Link onClick={() => switchPanel()}>
              {panel === LOGIN ? 'Signup' : 'Login'}
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
