import React from 'react';

const Casa = (props) => {
  return (
    <div className='Casa'>
      <p>Casa {props.casa}</p>
      <h1>{props.numero}</h1>
    </div>
  );
};

export default Casa;
