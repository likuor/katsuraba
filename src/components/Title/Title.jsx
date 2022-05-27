import React from 'react';

function Title(props) {
  return (
    <div className='text-center bg-gray-50 text-gray-800 py-10 px-6'>
      <h1 className='text-xl md:text-2xl font-bold'>{props.mainTitle}</h1>
      <p className='text-xl md:text-2xl font-bold mb-4'>{props.subTitle}</p>
      <h3 className='text-lg md:text-xl font-extralight'>
        {props.mainDescription}
      </h3>
      <p className='text-lg md:text-xl font-extralight'>
        {props.subDescription}
      </p>
    </div>
  );
}

export default Title;
