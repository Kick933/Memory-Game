import React from 'react';

function LandingPage({restart,lost}) {
  if(!lost){
  return <div className='bg-black text-white w-screen h-screen flex flex-col justify-center items-center'>
      <p className='font-Supermercado text-4xl font-bold mb-8'>Welcome to Memory Game</p>
      <p className='mb-8'>Put your memory to test with amazing Pokemons.</p>
      <button className='bg-green-400 w-32 p-2 hover:bg-green-500 active:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 rounded-xl' onClick={restart}>Let's Start</button>
  </div>;
  }else{
    return <div className='bg-black text-white w-screen h-screen flex flex-col justify-center items-center'>
      <p className='font-Supermercado text-4xl font-bold mb-8'>Oops, you lost..</p>
      <button className='bg-green-400 mb-8 w-32 p-2 hover:bg-green-500 active:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 rounded-xl' onClick={restart}>Try Again</button>
      <p className='my-8'>Check out my Portfolio</p>
      <a href="#h" className='bg-green-400 w-32 p-2 hover:bg-green-500 active:bg-green-600 focus:outline-none focus:ring focus:ring-green-500 rounded-xl'>Sure</a>
  </div>;
  }
}

export default LandingPage;
