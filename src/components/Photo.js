import React, {useRef} from 'react';

function Photo({data,handleClick}) {
    const {seed,clicked} = data
    const source = `https://www.picsum.photos/seed/${seed}/300/300`
    const border = useRef(0)
    function internalHandleClick(seed){
        if(clicked){
            const color = "#B91C1C"
            border.current.style.borderColor = color
        }
        handleClick(seed)
    }
  return (
  <div ref={border} className='rounded-xl overflow-hidden border-gray-200 border-2 w-80 h-80' onClick={() => internalHandleClick(seed)}>
      <img className='w-80 h-80' src={source} alt=""/>
  </div>);
}

export default React.memo(Photo);
