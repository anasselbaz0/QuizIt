import React, { useState } from 'react';
import { ArrowBackRounded } from '@material-ui/icons';
import Button from '../Button/Button';
import ButtonGroup from '../Button/ButtonGroup';
import Auth from '../Authentication/Auth';
import './Welcome.css';
import TeacherSection from '../../containers/TeacherSection/TeacherSection';
import StudentSection from '../../containers/StudentSection/StudentSection';

const Welcome = () => {
  const back = (
    <div className="mt-4 w-4/5 max-w-xl m-auto text-left">
      <div className="p-2 bg-opacity-50 bg-gray-500 hover:bg-white rounded-full cursor-pointer back-icon">
        <ArrowBackRounded
          className="text-5xl"
          onClick={() => {
            setTeacherSectionIsOpen(false);
            setStudentSectionIsOpen(false);
          }}
        />
      </div>
    </div>
  );
  const [teacherSectionIsOpen, setTeacherSectionIsOpen] = useState(false);
  const [studentSectionIsOpen, setStudentSectionIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      {!(teacherSectionIsOpen || studentSectionIsOpen) && (
        <div className="flex flex-col items-center w-full">
          <div className="text-3xl mb-4 md:text-5xl font-semibold">
            Welcome to <span className="text-teal-500">Quiz It</span>{' '}
          </div>
          <ButtonGroup className="text-center">
            <Button
              onClick={() => setTeacherSectionIsOpen(true)}
              className="text-2xl"
            >
              {' '}
              Teacher Section{' '}
            </Button>
            <Button
              onClick={() => setStudentSectionIsOpen(true)}
              className="text-2xl"
            >
              {' '}
              Student Section{' '}
            </Button>
          </ButtonGroup>
          <div className="text-lg text-center mt-4 md:text-xl px-8 font-hairline max-w-xl">
            Quiz It is a platform that allows you to create and host your tests
            or quizzes in our server. And invite others to take your quiz
            through a PIN Quiz. The results will be sent to the host by email.
          </div>
        </div>
      )}

      {teacherSectionIsOpen && (
        <div className="w-full flex flex-col">
          <TeacherSection />
          {back}
        </div>
      )}

      {studentSectionIsOpen && (
        <div className="w-full flex flex-col">
          <StudentSection />
          {back}
        </div>
      )}
    </div>
  );
};

export default Welcome;
