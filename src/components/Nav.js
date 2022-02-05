import React from 'react';

function Nav({current,best}) {
  return <div className='w-screen flex p-4 justify-between items-center bg-gray-800'>
      <p className='font-Supermercado text-3xl text-indigo-300 font-extrabold'>Memory Game</p>
      <div className='flex flex-col md:justify-around md:w-48'>
      <p>Score : {current}</p>
      <p>Best : {best}</p>
      </div>
  </div>;
}

export default React.memo(Nav);
