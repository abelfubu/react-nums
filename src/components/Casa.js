import React from 'react';
import { Typography, Grid, Zoom } from '@material-ui/core';

const Casa = (props) => {
  return (
    <Grid item xs={props.grid}>
      <div className='Casa'>
        <Typography variant='body2' color='initial'>
          {props.casa}
        </Typography>
        <Zoom in>
          <Typography className='trans' variant='h1' color='initial'>
            {props.numero}
          </Typography>
        </Zoom>
      </div>
    </Grid>
  );
};

export default Casa;
