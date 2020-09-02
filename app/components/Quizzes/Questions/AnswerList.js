import React from 'react';
import { CheckCircle, CheckCircleOutline, Delete } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import SubTitle from '../../SubTitle';
import Item from '../Item';

const AnswerList = props => {
  const dispatch = useDispatch();

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
            <CheckCircle className="text-teal-500 hover:text-gray-500 ml-3 cursor-pointer" />
          ) : (
            <CheckCircleOutline className="text-gray-500 hover:text-teal-500 ml-3 cursor-pointer" />
          )}
          <Delete
            className="text-red-200 hover:text-red-400 rounded-lg ml-3 cursor-pointer"
            onClick={() => console.log(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
