import React, { useContext } from 'react';
import './Calculadora.css';
import * as calc from '../actions/calculos';
import Casa from './Casa';
import Form from './Form';
import { userContext } from '../context/user-context';

const { casa, sumar, nombreArray, alma, personalidad } = calc;

const Calculadora = (props) => {
  const user = useContext(userContext).user;

  const { name, day, month, year } = user;

  const cmv = day + month + sumar(year);
  const cmvTotal = sumar(cmv);
  const nombreTotal = nombreArray(name.toLowerCase());

  return (
    <div>
      <Form />
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
