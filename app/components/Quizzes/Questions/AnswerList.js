import React from 'react';
import { CheckCircle, CheckCircleOutline, Delete } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import SubTitle from '../../SubTitle';
import Item from '../Item';
import { updateAnswers, updateCorrects } from '../state/actions';

const AnswerList = props => {
  const dispatch = useDispatch();
  const correct = useSelector(state => state.quiz.correct);
  const answers = useSelector(state => state.quiz.answers);

  return (
    <div className="w-full">
      <SubTitle> Answers </SubTitle>
      {props.list.map((item, index) => (
        <div
          key={item}
          className="text-xs md:text-base w-full flex justify-between items-center"
        >
          <Item>{item}</Item>
          {props.correct.includes(index) ? (
            <CheckCircle
              onClick={() => dispatch(updateCorrects(correct.filter(n => n !== index)))}
              className="text-teal-500 hover:text-gray-500 ml-3 cursor-pointer" />
          ) : (
            <CheckCircleOutline
              onClick={() => dispatch(updateCorrects([...correct, index]))}
              className="text-gray-500 hover:text-teal-500 ml-3 cursor-pointer" />
          )}
          <Delete
            className="text-red-200 hover:text-red-400 rounded-lg ml-3 cursor-pointer"
            onClick={() => dispatch(updateAnswers(answers.filter(answer => answer !== item)))}
          />
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
