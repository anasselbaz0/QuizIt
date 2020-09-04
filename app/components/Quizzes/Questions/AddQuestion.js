import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../Input/Input';
import ButtonGroup from '../../Button/ButtonGroup';
import Button from '../../Button/Button';
import {
  addToQuestions,
  closeAddQuestion,
  openAddQuestion,
  updateAnswers,
} from '../state/actions';
import AnswerList from './AnswerList';
import SubTitle from '../../SubTitle';

const AddQuestion = () => {
  const addQuestion = useSelector(state => state.quiz.addQuestion);
  const dispatch = useDispatch();
  const [question, setQuestion] = React.useState('');
  const [answerToAdd, setAnswerToAdd] = React.useState('');
  const correct = useSelector(state => state.quiz.correct);
  const answers = useSelector(state => state.quiz.answers);

  return (
    <div
      className={
        (addQuestion && 'border bg-gray-150 rounded-md px-6 py-2 my-4') || ''
      }
    >
      {addQuestion ? (
        <div className="flex-1 flex flex-col justify-between items-center">
          {/* Question */}
          <SubTitle> Question </SubTitle>
          <Input
            noLabel
            label="Question"
            placeholder="Question here ... ?"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            className="md:w-full text-lg bg-gray-100 font-semibold p-2 md:p-3 rounded-sm md:mb-1 m-0 p-0"
          />
          {/* Answers */}

          {answers.length > 0 && (
            <AnswerList list={answers} correct={correct} />
          )}

          <div className="w-full flex flex-col md:flex-row pr-4 bg-gray-100 justify-between items-end">
            <Input
              label="Answer to add"
              placeholder="Answer here ..."
              value={answerToAdd}
              onChange={e => setAnswerToAdd(e.target.value)}
              className="min-h-10 flex-1 md:w-full text-lg font-semibold p-2 md:p-3 rounded-sm md:mb-1 m-0 p-0"
            />
            <div className="text-right flex-0">
              <Button
                className="px-4 mb-6 sm:w-auto md:w-full"
                onClick={() => {
                  if (answerToAdd.length > 0)
                    dispatch(updateAnswers([...answers, answerToAdd]));
                  setAnswerToAdd('');
                }}
              >
                {' '}
                Add answer{' '}
              </Button>
            </div>
          </div>

          <ButtonGroup>
            <Button
              outlined
              color="red"
              onClick={() => dispatch(closeAddQuestion())}
            >
              {' '}
              Cancel{' '}
            </Button>
            <Button
              onClick={() => {
                if (question.length > 0 && answers.length > 0) {
                  dispatch(addToQuestions(question, answers, correct));
                  setQuestion('');
                }
              }}
            >
              {' '}
              Add Question{' '}
            </Button>
          </ButtonGroup>
        </div>
      ) : (
        <Button outlined onClick={() => dispatch(openAddQuestion())}>
          Add Question
        </Button>
      )}
    </div>
  );
};

export default AddQuestion;
