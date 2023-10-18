import { Pregunta } from './pregunta';

export const PREGUNTAS: Pregunta[] = [
  {
    pregunta: '¿Cómo se define TypeScript?',
    respuesta:
      'TypeScript es un lenguaje de programación desarrollado por Microsoft que es un superconjunto de JavaScript.',
  },
  {
    pregunta:
      '¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?',
    respuesta:
      'La principal diferencia es que TypeScript es un lenguaje tipado, lo que significa que puedes definir tipos de datos para tus variables y parámetros de función.',
  },
  {
    pregunta: '¿Muestra la lista de tipos básicos de TypeScript.',
    respuesta: 'string, number, boolean, any, etc.',
  },
  {
    pregunta:
      '¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?',
    respuesta: 'Type, Interface y Class.',
  },
  {
    pregunta:
      '¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.',
    respuesta:
      'No, TypeScript es un lenguaje de programación desarrollado por Microsoft que es un superconjunto de JavaScript y se transpila a JavaScript cuando se compila.',
  },
  {
    pregunta:
      'Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?',
    respuesta:
      'Por que al transpilar te hace un mapeo y te genera un fichero JS a partir del ',
  },
  {
    pregunta: '¿Para qué sirve el archivo tsconfig.json?',
    respuesta:
      'Para realizar una configuración mas estricta de y pudiendo personalizar las reglas de TypeScript.',
  },
];
