import React from 'react';
import { Typography, Zoom } from '@material-ui/core';

const Letra = (props) => {
  return (
    <Zoom in>
      <div
        onClick={props.click}
        className='Letra'
        sytle={{ display: 'inline-block' }}>
        <Typography id='nletra' variant='body2' color='initial'>
          {props.casa}
        </Typography>
        <Typography variant='h5' color='initial'>
          {props.numero}
        </Typography>
      </div>
    </Zoom>
  );
};

export default Letra;
