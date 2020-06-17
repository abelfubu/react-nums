export const sumar = (numero) => {
  let total = null;
  while (numero > 9) {
    total = numero;
    numero = null;
    for (let i = 0; i < total.toString().length; i++) {
      numero = numero + +total.toString()[i];
    }
  }
  return numero;
};

export const nombreArray = (nombre) => {
  const element = [];
  for (let i = 0; i < nombre.length; i++) {
    element.push(nombre[i]);
  }
  return element;
};

export const alma = (nombre) =>
  nombre.filter(
    (letras) =>
      letras === 'a' ||
      letras === 'e' ||
      letras === 'i' ||
      letras === 'o' ||
      letras === 'u',
  );

export const personalidad = (nombre) =>
  nombre.filter(
    (letras) =>
      letras !== 'a' &&
      letras !== 'e' &&
      letras !== 'i' &&
      letras !== 'o' &&
      letras !== 'u' &&
      letras !== ' ',
  );

export const casa = (a, b, c, nombre) =>
  nombre.filter((letras) => letras === a || letras === b || letras === c);

export const convertidorLetrasNumeros = (nombre) => {
  let nombreConvertido = 0;

  for (let i = 0; i < nombre.length; i++) {
    switch (nombre[i]) {
      case 'a':
        nombreConvertido = nombreConvertido + 1;
        break;
      case 'b':
        nombreConvertido = nombreConvertido + 2;
        break;
      case 'c':
        nombreConvertido = nombreConvertido + 3;
        break;
      case 'ç':
        nombreConvertido = nombreConvertido + 3;
        break;
      case 'd':
        nombreConvertido = nombreConvertido + 4;
        break;
      case 'e':
        nombreConvertido = nombreConvertido + 5;
        break;
      case 'f':
        nombreConvertido = nombreConvertido + 6;
        break;
      case 'g':
        nombreConvertido = nombreConvertido + 7;
        break;
      case 'h':
        nombreConvertido = nombreConvertido + 8;
        break;
      case 'i':
        nombreConvertido = nombreConvertido + 9;
        break;
      case 'j':
        nombreConvertido = nombreConvertido + 1;
        break;
      case 'k':
        nombreConvertido = nombreConvertido + 2;
        break;
      case 'l':
        nombreConvertido = nombreConvertido + 3;
        break;
      case 'm':
        nombreConvertido = nombreConvertido + 4;
        break;
      case 'n':
        nombreConvertido = nombreConvertido + 5;
        break;
      case 'ñ':
        nombreConvertido = nombreConvertido + 5;
        break;
      case 'o':
        nombreConvertido = nombreConvertido + 6;
        break;
      case 'p':
        nombreConvertido = nombreConvertido + 7;
        break;
      case 'q':
        nombreConvertido = nombreConvertido + 8;
        break;
      case 'r':
        nombreConvertido = nombreConvertido + 9;
        break;
      case 's':
        nombreConvertido = nombreConvertido + 1;
        break;
      case 't':
        nombreConvertido = nombreConvertido + 2;
        break;
      case 'u':
        nombreConvertido = nombreConvertido + 3;
        break;
      case 'v':
        nombreConvertido = nombreConvertido + 4;
        break;
      case 'w':
        nombreConvertido = nombreConvertido + 5;
        break;
      case 'x':
        nombreConvertido = nombreConvertido + 6;
        break;
      case 'y':
        nombreConvertido = nombreConvertido + 7;
        break;
      case 'z':
        nombreConvertido = nombreConvertido + 8;
        break;
      default:
    }
  }
  return nombreConvertido;
};

export const definirNumero = (numero) => {
  let numeroDefinido = 0;

  switch (numero) {
    case 44:
      numeroDefinido = '44/8';
      break;
    case 33:
      numeroDefinido = '33/6';
      break;
    case 26:
      numeroDefinido = '26/8';
      break;
    case 22:
      numeroDefinido = '22/4';
      break;
    case 20:
      numeroDefinido = '20/2';
      break;
    case 19:
      numeroDefinido = '19/1';
      break;
    case 16:
      numeroDefinido = '16/7';
      break;
    case 15:
      numeroDefinido = '15/6';
      break;
    case 14:
      numeroDefinido = '14/5';
      break;
    case 13:
      numeroDefinido = '13/4';
      break;
    case 12:
      numeroDefinido = '12/3';
      break;
    case 11:
      numeroDefinido = '11/2';
      break;
    case 10:
      numeroDefinido = '10/1';
      break;
    default:
      let total = null;
      while (numero > 9) {
        total = numero;
        numero = null;
        for (let i = 0; i < total.toString().length; i++) {
          numero = numero + +total.toString()[i];
        }
      }
      numeroDefinido = numero;
      break;
  }
  return numeroDefinido;
};
