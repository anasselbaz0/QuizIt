import React from 'react';
import { CheckCircle, CheckCircleOutline, Delete } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Item from '../Item';
import SubTitle from '../../SubTitle';

const QuestionList = props => 
// Display a question and it's answers

  (
    <div className="w-full">
    <SubTitle> Questions </SubTitle>
    {props.list.map((item, index) => (
      <div
        key={item}
        className="border rounded-md text-xs md:text-base w-full flex justify-between items-center"
      >
        <div className="w-full">
          <Item>{item.question}</Item>
          {/* {item.answers.map(answer => ( */}
          {/*  <Item className="ml-4"> {answer} </Item> */}
          {/* ))} */}
        </div>
        <Delete
          className="text-red-300 hover:text-red-500 ml-3 cursor-pointer"
          onClick={() => console.log(index)}
        />
      </div>
    ))}
  </div>
);

export default QuestionList;
