import React, { useState } from 'react';
import { Paper, Stepper, Step } from '@material-ui/core';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input/Input';
import Title from '../Title';
import AddQuestion from './Questions/AddQuestion';
import Button from '../Button/Button';
import ButtonGroup from '../Button/ButtonGroup';
import { addQuiz, setTitle } from './state/actions';
import QuestionList from './Questions/QuestionList';

const CreateQuiz = () => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [addQuestion, setAddQuestion] = useState(false);
  const title = useSelector(state => state.quiz.title);
  const questions = useSelector(state => state.quiz.questions);
  const correct = useSelector(state => state.quiz.correct);

  function getSteps() {
    return ['Quiz title', 'Questions', 'Validation'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Input
            label="Title"
            placeholder="Quiz title here ..."
            value={title}
            onChange={e => dispatch(setTitle(e.target.value))}
            className="text-2xl"
          />
        );
      case 1:
        return (
          <React.Fragment>
            <QuestionList list={questions} />
            <AddQuestion />
          </React.Fragment>
        );
      case 2:
        return (
          <div>
            <QuestionList list={questions} />
          </div>
        );
      default:
        return 'Unknown step';
    }
  }

  const steps = getSteps();
  const handleNext = e => {
    console.log(activeStep);
    if (activeStep === steps.length + 1) e.preventDefault();
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="h-full flex-1 p-2 md:p-4 bg-white rounded-sm shadow-sm m-2">
      <Title> Create a new Quiz </Title>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <span className="text-gray-500 font-bold"> {label} </span>
            </StepLabel>
            <StepContent>
              {getStepContent(index)}
              {!addQuestion && (
                <div className="text-right w-full">
                  <ButtonGroup>
                    <Button
                      outlined
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </ButtonGroup>
                </div>
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <Paper
          square
          elevation={0}
          className="ml-8 mb-4 flex flex-col md:flex-row justify-between items-end"
        >
          <div className="text-left flex-1 w-full mb-2">
            {' '}
            All steps completed - you&apos;re finished
          </div>
          <ButtonGroup>
            <Button outlined onClick={handleReset}>
              Reset
            </Button>
            <Button
              onClick={() => {
                console.log(title);
                console.log(questions);
                console.log(correct);
                dispatch(addQuiz(title, questions, correct));
              }}
            >
              Create Quiz
            </Button>
          </ButtonGroup>
        </Paper>
      ) : null}
    </div>
  );
};
export default CreateQuiz;
