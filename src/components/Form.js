import React, { useContext } from 'react';
import { userContext } from '../context/user-context';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

const Form = () => {
  const classes = useStyles();
  const user = useContext(userContext).user;
  const updateUser = useContext(userContext).update;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    updateUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          id='name'
          label='Nombre'
          type='text'
          onChange={handleInputChange}
          value={user.name}
          name='name'
        />
        <TextField
          id='standard-number'
          label='Día'
          type='number'
          onChange={handleInputChange}
          value={user.day}
          name='day'
        />
        <TextField
          id='standard-number'
          label='Mes'
          type='number'
          onChange={handleInputChange}
          value={user.month}
          name='month'
        />
        <TextField
          id='standard-number'
          label='Año'
          type='number'
          onChange={handleInputChange}
          value={user.year}
          name='year'
        />
      </form>
    </div>
  );
};

export default Form;
