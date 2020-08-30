import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import '../Menu/Menu.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [menu, setMenu] = useState([
    {
      name: 'My quizzes',
      to: 'quizzes',
    },
    {
      name: 'About',
      to: 'about',
    },
  ]);
  const [menuOpened, setMenuOpened] = useState(false);
  function switchMenuState() {
    menuOpened ? setMenuOpened(false) : setMenuOpened(true);
  }
  return (
    <nav className="relative flex items-center justify-between flex-wrap bg-teal-500 p-2 md: p-4 xl:p-6">
      {/** *** Logo **** */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-semibold text-xl font-serif ">
          Quiz It
        </Link>
      </div>
      <div className="flex justify-end md:justify-between flex-1">
        <div className="hidden md:flex items-center">
          <Menu menu={menu} />
        </div>
        {/** *** Humberger + create quiz button **** */}
        <div className="flex">
          <Link
            to="create"
            className="flex items-center justify-center inline-block text-sm px-4 py-2 leading-none border rounded
             text-white border-white hover:border-transparent hover:text-teal-500 font-semibold hover:bg-white"
          >
            Create a Quiz
          </Link>
          <button
            onClick={() => switchMenuState()}
            className="ml-2 md:hidden flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpened && (
        <div className="md:hidden menu">
          <Menu menu={menu} />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
