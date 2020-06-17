import React, { useContext } from 'react';
import * as calc from '../actions/calculos';
import Casa from './Casa';
import Letra from './Letra';
import Form from './Form';
import { userContext } from '../context/user-context';
import { Grid, Typography, Container, Box } from '@material-ui/core';

const { casa, sumar, nombreArray, alma, personalidad, definirNumero } = calc;

const Calculadora = (props) => {
  const updateUser = useContext(userContext).update;
  const user = useContext(userContext).user;
  const { name, day, month, year } = user;

  const cmv = day + month + sumar(year);
  const cmvTotal = sumar(cmv);
  const nombreTotal = nombreArray(name.toLowerCase());
  const nombreM = nombreArray(name);

  const handleDeletion = (index) => {
    nombreM.splice(index, index + 1);
    updateUser((prevUser) => {
      return {
        ...prevUser,
        name: nombreM.join(''),
      };
    });
  };

  const letra = nombreM.map((letra, index) =>
    letra === ' ' ? (
      <Letra key={index} numero='   ' click={() => handleDeletion(index)} />
    ) : (
      <Letra
        key={index}
        numero={letra}
        casa={calc.convertidorLetrasNumeros(letra.toLowerCase())}
        click={() => handleDeletion(index)}></Letra>
    ),
  );

  return (
    <div className='bg'>
      <Container maxWidth='lg'>
        <Form />
        {letra}
        <Box mt={5} />
        <Grid container spacing={5}>
          <Grid item container lg={6}>
            <Grid item xs={12}>
              <Typography variant='h4'>Inclusión</Typography>
            </Grid>
            <Casa
              grid='4'
              casa='Casa 1'
              numero={casa('a', 'j', 's', nombreTotal).length}
            />
            <Casa
              grid='4'
              casa='Casa 2'
              numero={casa('b', 'k', 't', nombreTotal).length}
            />
            <Casa
              grid='4'
              casa='Casa 3'
              numero={casa('c', 'l', 'u', nombreTotal).length}
            />
            <Casa
              grid='4'
              casa='Casa 4'
              numero={casa('d', 'm', 'v', nombreTotal).length}
            />
            <Casa
              grid='4'
              casa='Casa 5'
              numero={casa('e', 'n', 'w', nombreTotal).length}
            />
            <Casa
              grid='4'
              casa='Casa 6'
              numero={casa('f', 'o', 'x', nombreTotal).length}
            />
            <Casa
              grid='4'
              casa='Casa 7'
              numero={casa('g', 'p', 'y', nombreTotal).length}
            />
            <Casa
              grid='4'
              casa='Casa 8'
              numero={casa('h', 'q', 'z', nombreTotal).length}
            />
            <Casa
              grid='4'
              casa='Casa 9'
              numero={casa('i', 'r', null, nombreTotal).length}
            />
          </Grid>
          <Grid container item lg={6}>
            <Grid item xs={12}>
              <Typography variant='h4'>Números</Typography>
            </Grid>
            <Casa
              grid={6}
              casa='Camino de Vida'
              numero={definirNumero(+cmvTotal)}
            />
            <Casa
              grid={6}
              casa='Número de Fuerza'
              numero={definirNumero(+sumar(day + month))}
            />
            <Casa
              grid={4}
              casa='Número de Alma'
              numero={definirNumero(
                sumar(calc.convertidorLetrasNumeros(alma(nombreTotal))),
              )}
            />
            <Casa
              grid={4}
              casa='Número de Personalidad'
              numero={calc.sumar(
                calc.convertidorLetrasNumeros(personalidad(nombreTotal)),
              )}
            />
            <Casa
              grid={4}
              casa='Número de Expresión'
              numero={calc.sumar(
                calc.convertidorLetrasNumeros(
                  personalidad(nombreTotal) + alma(nombreTotal),
                ),
              )}
            />
            <Casa grid={4} casa='Número de la Madre' numero={sumar(+day)} />
            <Casa grid={4} casa='Número del Niño' numero={sumar(+month)} />
            <Casa grid={4} casa='Número del Padre' numero={sumar(+year)} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Calculadora;
