import React from 'react';
import {
  CheckCircle,
  CheckCircleOutline,
  Delete,
  Help,
  SubdirectoryArrowRight,
} from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import Item from '../Item';
import { updateQuestions } from '../state/actions';

const QuestionList = props => {
  const questions = useSelector(state => state.quiz.questions);
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      {questions.map((item, index) => (
        <div
          key={index}
          className="text-xs md:text-base w-full flex justify-between items-start"
        >
          <div className="w-full">
            <Item>
              <div className="text-gray-800 mb-1">
                <Help className="text-teal-500 hover:text-teal-400" />{' '}
                {item.question}
              </div>
              {item.answers.map((answer, answerIndex) => (
                <div key={answer} className="text-gray-600 font-base ml-6">
                  <SubdirectoryArrowRight className="text-teal-500 hover:text-teal-400" />
                  <span
                    className={
                      item.correct.includes(answerIndex)
                        ? 'text-teal-600 font-bold'
                        : ''
                    }
                  >
                    {answer}
                  </span>
                </div>
              ))}
            </Item>
          </div>
          <Delete
            className="text-red-300 hover:text-red-500 ml-3 cursor-pointer"
            onClick={() =>
              dispatch(
                updateQuestions(
                  questions.filter(q => q.question !== item.question),
                ),
              )
            }
          />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
