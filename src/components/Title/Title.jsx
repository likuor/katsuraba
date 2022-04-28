import React from 'react';

function Title(props) {
  return (
    <div className='text-center bg-gray-50 text-gray-800 py-20 px-6'>
      <h1 className='text-3xl font-bold mt-0 mb-6'>
        {props.mainTitle}
        <p>{props.subTitle}</p>
      </h1>
      <h3 className='text-2xl font-bold mb-8'>
        {props.mainDescription}
        <p>{props.subDescription}</p>
      </h3>
    </div>
  );
}

export default Title;
