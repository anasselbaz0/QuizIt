import React, { useState } from 'react';
import Input from '../Input/Input';
import Title from '../Title';
import AddQuestion from './Questions/AddQuestion';
import Button from '../Button/Button';
import { Paper, Stepper, Step } from '@material-ui/core';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import ButtonGroup from '../Button/ButtonGroup';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Question from './Question';

const CreateQuiz = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      questions: [
        'qu1',
        'qu2',
        'qu3',
        'qu4',
        'qu5',
      ],
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Required'),
      questions: Yup.array()
        .required('Required'),
    }),
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values));
    },
  });

  function getSteps() {
    return ['Quiz title', 'Questions', 'Validation'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Input
          label="Title"
          placeholder="Quiz title here"
          value={formik.values.title}
          onChange={formik.handleChange}
        />;
      case 1:
        return (
          <div>
            {formik.values.questions.map((question, index) => (
              <div key={index} className="w-full flex justify-between">
                <Question>
                  {question}
                </Question>
                <Button color='red' className="ml-2" outlined onClick={() => {
                  for( var i = 0; i < formik.values.questions.length; i++) {
                    if ( i === index) {
                      formik.values.questions.splice(i, 1);
                    }
                  }
                }}> Remove Question </Button>
              </div>
            ))}
            <Button outlined onClick={() => formik.values.questions.push('hi')}> Add Question </Button>
          </div>
        );
      case 2:
        return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
      default:
        return 'Unknown step';
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  if (activeStep === steps.length) {
    formik.submitForm().then(r => alert(JSON.stringify(r)));
  }

  return (
    <div className="h-full flex-1 p-2 md:p-4 bg-white rounded-sm shadow-sm m-2">

      <Title> Create a new Quiz </Title>
      <form onSubmit={formik.handleSubmit}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel> <span className="text-gray-500 font-bold"> {label} </span></StepLabel>
              <StepContent>
                {getStepContent(index)}
                <div className="text-right w-full">
                  <ButtonGroup>
                    <Button disabled={activeStep === 0} onClick={handleBack}> Back </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </ButtonGroup>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </form>

      {activeStep === steps.length && (
        <Paper square elevation={0} className="">
          All steps completed - you&apos;re finished
          <Button onClick={handleReset} className="">
            Reset
          </Button>
        </Paper>
      )}

    </div>
  );
};

export default CreateQuiz;
