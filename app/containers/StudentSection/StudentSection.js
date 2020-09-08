import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ButtonGroup from '../../components/Button/ButtonGroup';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loadQuizRequest, setPin } from './state/actions';


const StudentSection = () => {

  const dispatch = useDispatch();
  const [confirmation, setConfirmation] = useState(false);
  const pinFromStore = useSelector(state => state.student.pin);

  const formik = useFormik({
    initialValues: {
      pin: '',
    },
    validationSchema: Yup.object({
      pin: Yup.number()
        .typeError("That doesn't look like a number")
        .positive("A number can't start with a minus")
        .integer("A number can't include a decimal point")
        .required('Required'),
    }),
    validateOnChange: true,
    onSubmit: values => {
      dispatch(setPin(values.pin));
      setConfirmation(true);
    }
  });


  return (
    <div className="min-w-2xl flex flex-col items-center justify-center">
      <div className="text-2xl md:text-3xl font-semibold">
        Welcome to <span className="text-teal-500">Quiz It</span>{' '}
      </div>
      <div className="shadow-md rounded-sm bg-white p-2 md:p-4 py-2 md:py-4 w-4/5 max-w-xl flex flex-col mt-4 ">
        <form
          className="m-auto flex-auto bg-white p-2 w-full rounded-lg"
          onSubmit={formik.handleSubmit}
        >
          {!confirmation
            ?
            <Input
              focus
              label="Pin"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pin}
              placeholder="####"
              error={
                formik.touched.pin && formik.errors.pin
                  ? formik.errors.pin
                  : null
              }
            />
            :
            <div className="text-gray-600 font-semibold">
              The PIN is : <span className="text-2xl md:text-3xl text-teal-500 font-bold"> {pinFromStore} </span>
            </div>
          }
          <div className="flex mb-0">
            {!confirmation
              ?
              <ButtonGroup>
                <Button type="reset" outlined onClick={() => formik.resetForm()}>
                  Clear
                </Button>
                <Button
                  className="md:ml-2"
                  type="submit"
                >
                  Enter
                </Button>
              </ButtonGroup>
              :
              <ButtonGroup>
                <Button outlined onClick={() => setConfirmation(false)}>
                  Back
                </Button>
                <Button
                  className="md:ml-2"
                  onClick={() => dispatch(loadQuizRequest(pinFromStore))}
                >
                  Confirm PIN
                </Button>
              </ButtonGroup>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentSection;

