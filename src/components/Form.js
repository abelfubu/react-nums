import React from 'react';

const Form = () => {
  return (
    <div>
      <form action=''>
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
