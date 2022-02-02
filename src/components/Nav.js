import React from 'react';

function Nav({current,best}) {
  return <div className='w-screen flex p-4 justify-between items-center bg-indigo-300 dark:bg-gray-500'>
      <p className='font-Supermercado text-3xl text-indigo-300 font-extrabold'>Memory Game</p>
      <div className='flex justify-around w-48'>
      <p>Score : {current}</p>
      <p>Best : {best}</p>
      </div>
  </div>;
}

export default React.memo(Nav);
