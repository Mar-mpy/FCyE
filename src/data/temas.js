export const bloques = [
  {
    id: 1,
    title: 'Soy único y vivo con dignidad',
    color: 'mint',
    description: 'Reconocer nuestras capacidades, necesidades y libertad para tomar decisiones responsables.',
    temas: [
      { id: 1, title: 'Reconozco mis capacidades y potencialidades para actuar', page: 20, summary: 'Identificamos aquello que sabemos hacer, nuestras fortalezas y la manera en que podemos poner nuestras capacidades al servicio de los demás.' },
      { id: 2, title: 'Las niñas y los niños tenemos derecho a una vida digna', page: 30, summary: 'Reflexionamos sobre las necesidades que permiten vivir dignamente y reconocemos que niñas y niños tienen derechos que deben ser respetados.' },
      { id: 3, title: 'Elijo lo que es mejor para mí y los demás', page: 40, summary: 'Aprendemos a considerar las consecuencias de nuestras acciones y a elegir pensando en nuestro bienestar y en el de otras personas.' },
      { id: 4, title: 'Soy capaz de tomar decisiones y elegir libremente', page: 48, summary: 'Conocemos un proceso para tomar decisiones, valorar opciones y actuar con libertad y responsabilidad.' },
    ],
  },
  {
    id: 2,
    title: 'Construimos una convivencia respetuosa',
    color: 'peach',
    description: 'Valorar la diversidad, resolver conflictos y construir relaciones igualitarias y solidarias.',
    temas: [
      { id: 5, title: 'Valoramos la diversidad de las lenguas', page: 62, summary: 'Reconocemos la diversidad lingüística de México y comprendemos que las distintas lenguas y culturas forman parte de nuestra riqueza.' },
      { id: 6, title: 'Reconozco la diferencia entre conflicto y violencia', page: 72, summary: 'Distinguimos los conflictos de las situaciones de violencia y exploramos formas respetuosas de manejar desacuerdos.' },
      { id: 7, title: 'Construimos juntos la igualdad', page: 80, summary: 'Reflexionamos sobre la igualdad entre niñas y niños y sobre acciones que ayudan a evitar la discriminación y la exclusión.' },
      { id: 8, title: 'Seamos solidarios para convivir en paz, sin discriminación y sin violencia', page: 92, summary: 'Aprendemos que la solidaridad, el respeto y la colaboración ayudan a construir espacios seguros, pacíficos e incluyentes.' },
    ],
  },
  {
    id: 3,
    title: 'Participamos para mejorar nuestra comunidad',
    color: 'sky',
    description: 'Comprender la justicia, las normas, las autoridades y nuestra participación en el cuidado del planeta.',
    temas: [
      { id: 9, title: 'La justicia se relaciona con mis derechos', page: 104, summary: 'Identificamos situaciones justas e injustas y relacionamos la justicia con el respeto de nuestros derechos y los derechos de otras personas.' },
      { id: 10, title: 'Comprendo la importancia de las normas y la función de las autoridades', page: 116, summary: 'Comprendemos para qué sirven las normas y reconocemos la función de las autoridades en la convivencia y la protección de derechos.' },
      { id: 11, title: 'Nuestras formas de organización social y política', page: 126, summary: 'Conocemos distintas formas de organización y participación que permiten tomar acuerdos y atender necesidades de la comunidad.' },
      { id: 12, title: 'Participo por la salud de nuestro planeta', page: 138, summary: 'Reflexionamos sobre nuestras acciones cotidianas y participamos en el cuidado del ambiente y de los recursos que compartimos.' },
    ],
  },
]

export const todosLosTemas = bloques.flatMap((bloque) => bloque.temas.map((tema) => ({ ...tema, bloque })))
