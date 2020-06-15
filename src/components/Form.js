import React, { useContext } from 'react';
import { userContext } from '../context/user-context';

const Form = () => {
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
      <form user={user}>
        <input
          onChange={handleInputChange}
          value={user.name}
          name='name'
          type='text'
          placeholder='Name'
        />
        <input
          onChange={handleInputChange}
          value={user.day}
          name='day'
          type='number'
          placeholder='Dia'
        />
        <input
          onChange={handleInputChange}
          value={user.month}
          name='month'
          type='number'
          placeholder='Mes'
        />
        <input
          onChange={handleInputChange}
          value={user.year}
          name='year'
          type='number'
          placeholder='Año'
        />
      </form>
    </div>
  );
};

export default Form;
