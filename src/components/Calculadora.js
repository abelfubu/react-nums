import React, { useState } from 'react';
import './Calculadora.css';
import * as calc from '../actions/calculos';
import Casa from './Casa';

const { casa, sumar, nombreArray, alma, personalidad } = calc;

const Calculadora = () => {
  const [user, setUser] = useState({
    name: '',
    day: '',
    month: '',
    year: '',
  });
  const { name, day, month, year } = user;
  const cmv = day + month + sumar(year);

  const cmvTotal = sumar(cmv);
  const nombreTotal = nombreArray(name.toLowerCase());

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

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
      <h1>{name}</h1>
      <p>CMV - {cmvTotal}</p>
      <p>Fuerza - {calc.sumar(day + month)}</p>
      <div className='inclusion'>
        <p>Inclusión</p>
        <Casa casa='1' numero={casa('a', 'j', 's', nombreTotal).length} />
        <Casa casa='2' numero={casa('b', 'k', 't', nombreTotal).length} />
        <Casa casa='3' numero={casa('c', 'l', 'u', nombreTotal).length} />
        <Casa casa='4' numero={casa('d', 'm', 'v', nombreTotal).length} />
        <Casa casa='5' numero={casa('e', 'n', 'w', nombreTotal).length} />
        <Casa casa='6' numero={casa('f', 'o', 'x', nombreTotal).length} />
        <Casa casa='7' numero={casa('g', 'p', 'y', nombreTotal).length} />
        <Casa casa='8' numero={casa('h', 'q', 'z', nombreTotal).length} />
        <Casa casa='9' numero={casa('i', 'r', null, nombreTotal).length} />
      </div>

      <p>
        Alma - {calc.sumar(calc.convertidorLetrasNumeros(alma(nombreTotal)))}
      </p>
      <p>
        Personalidad -{' '}
        {calc.sumar(calc.convertidorLetrasNumeros(personalidad(nombreTotal)))}
      </p>
      <p>
        Expresión -{' '}
        {calc.sumar(
          calc.convertidorLetrasNumeros(
            personalidad(nombreTotal) + alma(nombreTotal),
          ),
        )}
      </p>
    </div>
  );
};

export default Calculadora;
