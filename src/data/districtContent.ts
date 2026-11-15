import amanecerSanVicenteImg from '../assets/images/amanecer_san_vicente_1794708453265.jpg';
import mapaLagunaSanVicenteImg from '../assets/images/mapa_laguna_san_vicente.png';
import reservaEcologicaImg from '../assets/images/reserva_ecologica_sendero_1794701652892.jpg';
import sectorOesteAccesoImg from '../assets/images/sector_oeste_acceso_1794706955219.jpg';
import type { SectorId, SymbolKey, TestimonialTheme } from '../utils/brandLogic';
import type { LocalFloraVariant } from '../components/WildBotanicalDecor';

export const OFFICIAL_LOGO_SRC = '/assets/aistudio/image_57ab1cbc.png';
export const CIRCULAR_LOGO_SRC = '/assets/aistudio/logo_circular_fondo_blanco_1de0ce76.png';
export const GOOGLE_MAPS_LAGUNA_URL = 'https://maps.app.goo.gl/UsWt1F8m66gtzN5z5';
export const MAPA_SAN_VICENTE_SRC = mapaLagunaSanVicenteImg;
export const SECTOR_NORTE_IMG_SRC = '/assets/aistudio/image_cbfb9b3c.png';
export const SECTOR_SUR_PASEO_IMG_SRC = '/assets/aistudio/image_dcea248b.png';
export const SECTOR_ESTE_CAMPING_IMG_SRC = '/assets/aistudio/image_cce9ce5e.png';

export const LANDMARK_PARROQUIA_IMG_SRC = '/assets/aistudio/image_b46c7e08.png';
export const LANDMARK_ESTACION_IMG_SRC = '/assets/aistudio/image_bbaf783b.png';
export const LANDMARK_QUINTA_IMG_SRC = '/assets/aistudio/image_0c9d14f0.png';
export const LANDMARK_LAGUNA_OJO_IMG_SRC = '/assets/aistudio/image_eed32877.png';

export const HERO_DAWN_SRC = amanecerSanVicenteImg;
export const HERO_PANORAMA_SRC = '/assets/aistudio/image_5e3443c9.png';
export const HERO_NATURE_SRC = reservaEcologicaImg;

export interface LogoSymbolElement {
  key: SymbolKey;
  index: string;
  title: string;
  shortLabel: string;
  visualElement: string;
  primaryHex: string;
  softSurfaceHex: string;
  meaning: string;
  territorialValues: string[];
  hotspot: { x: number; y: number };
}

export const LOGO_SYMBOL_ELEMENTS: LogoSymbolElement[] = [
  {
    key: 'agua',
    index: '01',
    title: 'Líneas onduladas azules: El agua y la laguna',
    shortLabel: 'Agua y Laguna',
    visualElement: 'Trazos fluidos en la base del isotipo',
    primaryHex: '#96D5F4',
    softSurfaceHex: '#E8F6FD',
    meaning:
      'Las líneas onduladas de color azul representan el agua y hacen referencia directa a la laguna de San Vicente, transmitiendo movimiento continuo, tranquilidad y conexión profunda con la naturaleza.',
    territorialValues: ['Espejo de agua', 'Tranquilidad', 'Identidad lacustre'],
    hotspot: { x: 43, y: 47 },
  },
  {
    key: 'urbano',
    index: '02',
    title: 'Construcciones centrales: Crecimiento y planificación',
    shortLabel: 'Desarrollo Urbano',
    visualElement: 'Silueta edilicia de dos volúmenes en el centro',
    primaryHex: '#329FD8',
    softSurfaceHex: '#E3F3FC',
    meaning:
      'Las construcciones en el centro simbolizan el crecimiento, la planificación territorial en cuatro sectores y la modernización del distrito en equilibrio con su frente costero.',
    territorialValues: ['Crecimiento ordenado', 'Planificación', 'Modernización'],
    hotspot: { x: 54, y: 32 },
  },
  {
    key: 'hoja',
    index: '03',
    title: 'La hoja verde: Cuidado ambiental y sustentabilidad',
    shortLabel: 'Sustentabilidad',
    visualElement: 'Hoja orgánica ascendente en el margen derecho',
    primaryHex: '#65A366',
    softSurfaceHex: '#EDF7E9',
    meaning:
      'La hoja verde refuerza el compromiso con la preservación de los humedales, la flora autóctona y la sustentabilidad ambiental del territorio.',
    territorialValues: ['Humedales protegidos', 'Flora autóctona', 'Sustentabilidad'],
    hotspot: { x: 70, y: 39 },
  },
  {
    key: 'sol',
    index: '04',
    title: 'El arco amarillo: Calidez, energía y encuentro',
    shortLabel: 'Sol y Comunidad',
    visualElement: 'Semicírculo solar envolvente en la parte superior',
    primaryHex: '#F2C53D',
    softSurfaceHex: '#FEF7DF',
    meaning:
      'El arco amarillo del sol aporta calidez, energía y bienestar, proyectando una imagen agradable, accesible y familiar para los vecinos y quienes visitan San Vicente.',
    territorialValues: ['Calidez', 'Encuentro comunitario', 'Disfrute familiar'],
    hotspot: { x: 52, y: 20 },
  },
];

export interface ProjectSector {
  id: SectorId;
  cardinal: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  accentHex: string;
  softHex: string;
  imageSrc: string;
  imageAlt: string;
}

export const PROJECT_SECTORS: ProjectSector[] = [
  {
    id: 'norte',
    cardinal: 'Sector Norte',
    name: 'Naturaleza y conservación',
    subtitle: 'Preservación del humedal y avistaje de aves',
    description:
      'Desarrollo de senderos naturales y miradores para el avistaje de aves, priorizando la preservación del entorno, la vegetación ribereña y la biodiversidad autóctona.',
    highlights: ['Senderos interpretativos', 'Miradores de avifauna', 'Protección de humedales'],
    accentHex: '#65A366',
    softHex: '#EDF7E9',
    imageSrc: SECTOR_NORTE_IMG_SRC,
    imageAlt: 'Mirador de madera con cartel interpretativo de aves y pasarela sobre humedales y juncos del Sector Norte',
  },
  {
    id: 'sur',
    cardinal: 'Sector Sur',
    name: 'Paseo y gastronomía',
    subtitle: 'Borde costero activo y encuentro turístico',
    description:
      'Espacio destinado al desarrollo de un paseo costero, paradores gastronómicos, comercios locales y propuestas de alojamiento integradas al paisaje de la laguna.',
    highlights: ['Paseo costero peatonal', 'Paradores gastronómicos', 'Comercios y alojamiento'],
    accentHex: '#F2C53D',
    softHex: '#FEF7DF',
    imageSrc: SECTOR_SUR_PASEO_IMG_SRC,
    imageAlt:
      'Paseo costero junto al borde del agua con luminarias, bancos, árboles y vecinos caminando y andando en bicicleta en el Sector Sur',
  },
  {
    id: 'este',
    cardinal: 'Sector Este',
    name: 'Camping y recreación',
    subtitle: 'Tradición recreativa puesta en valor',
    description:
      'Recuperación y puesta en valor del camping tradicional e histórico, pensado como espacio abierto de encuentro comunitario, descanso al aire libre y disfrute familiar.',
    highlights: ['Camping histórico renovado', 'Áreas de pícnic y sombra', 'Actividades recreativas'],
    accentHex: '#329FD8',
    softHex: '#E3F3FC',
    imageSrc: SECTOR_ESTE_CAMPING_IMG_SRC,
    imageAlt:
      'Carpas de camping sobre césped verde soleado bajo arboleda frondosa en el Sector Este de la laguna',
  },
  {
    id: 'oeste',
    cardinal: 'Sector Oeste',
    name: 'Accesibilidad',
    subtitle: 'Conectividad vial y movilidad integrada',
    description:
      'Mejoramiento de los accesos viales, pavimentación, estacionamientos ordenados y conexiones directas con el transporte público para facilitar la llegada de vecinos y visitantes.',
    highlights: ['Accesos y pavimentación', 'Estacionamientos ordenados', 'Transporte público'],
    accentHex: '#96D5F4',
    softHex: '#EAF6FD',
    imageSrc: sectorOesteAccesoImg,
    imageAlt: 'Camino pavimentado de acceso rodeado de césped verde y arboleda en el Sector Oeste',
  },
];

export interface TransparencySlot {
  id: string;
  title: string;
  status: string;
  description: string;
}

export const ENVIRONMENTAL_TRANSPARENCY_SLOTS: TransparencySlot[] = [
  {
    id: 'impacto-ambiental',
    title: 'Estudios de Impacto Ambiental',
    status: 'Espacio reservado · Próxima publicación',
    description:
      'Sector destinado a la carga pública de evaluaciones ambientales y dictámenes técnicos una vez concluidos y validados.',
  },
  {
    id: 'saneamiento-hidrico',
    title: 'Acciones de Saneamiento del Espejo de Agua',
    status: 'En preparación · Documentación futura',
    description:
      'Repositorio previsto para informes de calidad del agua, monitoreo de humedales y cronogramas de limpieza ribereña.',
  },
  {
    id: 'conservacion-biodiversidad',
    title: 'Avances de Conservación y Biodiversidad',
    status: 'Espacio institucional abierto',
    description:
      'Registro futuro de relevamientos de flora autóctona, aves migratorias y tareas junto a organizaciones ambientales.',
  },
];

export interface HeritageLandmark {
  id: string;
  title: string;
  era: string;
  summary: string;
  connection: string;
  accentHex: string;
  imageSrc: string;
  imageAlt: string;
}

export const HERITAGE_LANDMARKS: HeritageLandmark[] = [
  {
    id: 'laguna-ojo',
    title: 'Laguna del Ojo (Laguna de San Vicente)',
    era: 'Patrimonio natural e histórico',
    summary:
      'Conocida históricamente como Laguna del Ojo, acompañó el nacimiento y crecimiento de la localidad como punto de reunión, recreación y memoria colectiva.',
    connection: 'Núcleo geográfico y simbólico sobre el que se proyecta todo Distrito Laguna.',
    accentHex: '#329FD8',
    imageSrc: LANDMARK_LAGUNA_OJO_IMG_SRC,
    imageAlt:
      'Laguna del Ojo en San Vicente con cielo celeste, juncos en primer plano y el sol asomando suavemente en el horizonte',
  },
  {
    id: 'parroquia-ferrer',
    title: 'Parroquia San Vicente Ferrer',
    era: 'Patrimonio arquitectónico y comunitario',
    summary:
      'Referente histórico y espiritual del casco urbano que dio identidad al pueblo y dialoga con el circuito cultural de cercanía.',
    connection: 'Integra el recorrido histórico-cultural junto al espejo de agua.',
    accentHex: '#F2C53D',
    imageSrc: LANDMARK_PARROQUIA_IMG_SRC,
    imageAlt:
      'Edificio histórico en esquina de la Parroquia San Vicente Ferrer con sus dos torres campanario en el casco urbano',
  },
  {
    id: 'vieja-estacion',
    title: 'Vieja Estación de San Vicente',
    era: 'Memoria ferroviaria local',
    summary:
      'Testimonio del desarrollo urbano y social de la comunidad, hoy punto de encuentro cultural y paseo para las familias.',
    connection: 'Conecta la tradición ferroviaria con los nuevos accesos del distrito.',
    accentHex: '#65A366',
    imageSrc: LANDMARK_ESTACION_IMG_SRC,
    imageAlt:
      'Andén de la Vieja Estación ferroviaria con el cartel histórico que dice San Vicente rodeado de arboleda',
  },
  {
    id: 'quinta-17-octubre',
    title: 'Quinta 17 de Octubre',
    era: 'Patrimonio histórico nacional y provincial',
    summary:
      'Museo histórico y parque arbolado emblemático que convierte a San Vicente en un destino de interés cultural para visitantes de todo el país.',
    connection: 'Amplía la propuesta turística combinando historia, parque y laguna.',
    accentHex: '#8CBF75',
    imageSrc: LANDMARK_QUINTA_IMG_SRC,
    imageAlt:
      'Casona histórica de la Quinta 17 de Octubre con techo de tejas rodeada de grandes árboles verdes y parque',
  },
];

export interface VisitGuideTopic {
  id: string;
  label: string;
  title: string;
  summary: string;
  details: string[];
  accentHex: string;
}

export const VISIT_GUIDE_TOPICS: VisitGuideTopic[] = [
  {
    id: 'como-llegar',
    label: 'Cómo llegar',
    title: 'Ubicación y accesos desde Buenos Aires y el Conurbano',
    summary:
      'Pensado para escapadas de cercanía y turismo de día completo al sur del Área Metropolitana de Buenos Aires.',
    details: [
      'Acceso principal proyectado por el Sector Oeste con señalización clara y transporte público.',
      'Estacionamientos ordenados fuera del borde sensible del humedal para preservar la costa.',
      'Recorrido peatonal y ciclovías conectando la zona urbana con el espejo de agua.',
    ],
    accentHex: '#96D5F4',
  },
  {
    id: 'mapa-sectores',
    label: 'Mapa de sectores',
    title: 'Orientación rápida en los cuatro sectores',
    summary:
      'Cada sector cumple una función específica para disfrutar sin sobrecargar las zonas ecológicas.',
    details: [
      'Sector Norte: senderos de baja intensidad y miradores de aves.',
      'Sector Sur: paseo costero, oferta gastronómica y alojamiento.',
      'Sector Este: camping tradicional e histórico para pasar el día en familia.',
    ],
    accentHex: '#329FD8',
  },
  {
    id: 'recreacion',
    label: 'Servicios y recreación',
    title: 'Actividades al aire libre junto a la laguna',
    summary:
      'Espacios pensados para caminatas, descanso bajo arboleda, deportes náuticos sin motor y observación de naturaleza.',
    details: [
      'Paseos familiares por pasarelas costeras y áreas verdes del Sector Este.',
      'Actividades náuticas de bajo impacto ambiental sobre el espejo de agua.',
      'Circuitos interpretativos para escuelas, vecinos y excursionistas.',
    ],
    accentHex: '#65A366',
  },
  {
    id: 'gastronomia',
    label: 'Gastronomía y estadía',
    title: 'Paradores costeros, comercios y alojamiento local',
    summary:
      'El Sector Sur concentra la propuesta comercial y gastronómica para fortalecer la economía local.',
    details: [
      'Paradores y cafeterías con vista al agua integrados al paseo peatonal.',
      'Emprendimientos y ferias de productores locales en fines de semana.',
      'Opciones de alojamiento de cercanía y camping renovado.',
    ],
    accentHex: '#F2C53D',
  },
  {
    id: 'actividades',
    label: 'Actividades y eventos',
    title: 'Agenda cultural, deportiva y ambiental',
    summary:
      'Programación periódica pensada para reunir a la comunidad local con quienes visitan el distrito.',
    details: [
      'Encuentros culturales y recorridos patrimoniales hacia la Vieja Estación y Quinta 17 de Octubre.',
      'Salidas guiadas de avistaje de aves en el Sector Norte.',
      'Jornadas participativas de educación y concientización ambiental.',
    ],
    accentHex: '#8CBF75',
  },
  {
    id: 'cuidado-ambiente',
    label: 'Cuidar el ambiente',
    title: 'Recomendaciones para una visita responsable',
    summary:
      'El cuidado de la Laguna del Ojo y sus humedales depende también de quienes recorren el espacio.',
    details: [
      'Permanecé en los senderos y pasarelas habilitadas para no dañar la flora autóctona.',
      'Regresá con tus residuos o utilizá los puntos de separación diferenciada.',
      'Respetá la fauna local y evitá ruidos molestos en las zonas de avistaje de aves.',
    ],
    accentHex: '#65A366',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const COMMUNITY_FAQS: FaqItem[] = [
  {
    id: 'faq-humedales',
    question: '¿Cómo se compatibilizan las obras con la conservación de los humedales?',
    answer:
      'El ordenamiento en cuatro sectores concentra los usos comerciales y viales en los bordes Sur y Oeste, destinando el Sector Norte exclusivamente a senderos de bajo impacto, miradores y protección de vegetación nativa.',
  },
  {
    id: 'faq-estudios',
    question: '¿Dónde se podrán consultar los estudios de impacto ambiental y saneamiento?',
    answer:
      'En el apartado de Transparencia Ambiental de esta plataforma se habilitó un espacio específico destinado a publicar los estudios técnicos y avances de saneamiento apenas estén disponibles oficialmente.',
  },
  {
    id: 'faq-acceso',
    question: '¿El acceso a la laguna y a los espacios verdes seguirá siendo abierto a la comunidad?',
    answer:
      'Sí. Distrito Laguna está concebido como un espacio público de encuentro, recreación y disfrute para todos los vecinos y visitantes, recuperando inclusive el camping tradicional e histórico del Sector Este.',
  },
  {
    id: 'faq-participacion',
    question: '¿Cómo pueden los vecinos y organizaciones ambientales acercar propuestas?',
    answer:
      'Mediante el formulario de consultas y sugerencias disponible en esta sección, así como en las mesas de diálogo y reuniones participativas periódicas junto a vecinos e instituciones locales.',
  },
];

export interface NewsUpdateItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  accentHex: string;
}

export const NEWS_UPDATES: NewsUpdateItem[] = [
  {
    id: 'news-avances',
    category: 'Avances del proyecto',
    title: 'Planificación territorial en cuatro sectores',
    summary:
      'Presentación pública de la zonificación que articula paseo costero, camping histórico, accesibilidad vial y reserva natural.',
    accentHex: '#329FD8',
  },
  {
    id: 'news-agua',
    category: 'Recuperación y saneamiento',
    title: 'Agenda de saneamiento del espejo de agua',
    summary:
      'Espacio destinado a informar acciones de limpieza costera, preservación de humedales y seguimiento ambiental.',
    accentHex: '#96D5F4',
  },
  {
    id: 'news-concientizacion',
    category: 'Concientización ambiental',
    title: 'Jornadas de cuidado de flora autóctona y avifauna',
    summary:
      'Actividades educativas abiertas para conocer el valor ecológico de la Laguna de San Vicente.',
    accentHex: '#65A366',
  },
  {
    id: 'news-encuentros',
    category: 'Encuentros comunitarios',
    title: 'Mesas de diálogo con vecinos y organizaciones',
    summary:
      'Canal abierto de escucha para incorporar miradas locales sobre identidad, ambiente y desarrollo urbano.',
    accentHex: '#F2C53D',
  },
];

export interface ResidentTestimonial {
  id: string;
  author: string;
  neighborhood: string;
  role: string;
  quote: string;
  theme: Exclude<TestimonialTheme, 'todos'>;
  themeLabel: string;
  flora: LocalFloraVariant;
  floraLabel: string;
  accentHex: string;
  surfaceHex: string;
}

export const RESIDENT_TESTIMONIALS: ResidentTestimonial[] = [
  {
    id: 'testimonio-silvia',
    author: 'Silvia Ferreyra',
    neighborhood: 'San Vicente Centro',
    role: 'Vecina y docente',
    quote:
      'Volver a ver la laguna limpia, con pasarelas para caminar entre los juncos y los chicos aprendiendo a cuidar el humedal, nos llena de orgullo.',
    theme: 'naturaleza',
    themeLabel: 'Naturaleza y Humedales',
    flora: 'junco',
    floraLabel: 'Totoras y juncos ribereños',
    accentHex: '#65A366',
    surfaceHex: '#EDF7E9',
  },
  {
    id: 'testimonio-mateo',
    author: 'Mateo Quiroga',
    neighborhood: 'Barrio La Laguna',
    role: 'Ciclista y comerciante',
    quote:
      'El nuevo borde costero invita a salir en bici al amanecer y quedarse tomando unos mates. Trae movimiento y trabajo sin perder la calma del pueblo.',
    theme: 'encuentro',
    themeLabel: 'Paseo y Encuentro',
    flora: 'cortadera',
    floraLabel: 'Cortadera pampeana',
    accentHex: '#F2C53D',
    surfaceHex: '#FEF7DF',
  },
  {
    id: 'testimonio-clara',
    author: 'Clara Benítez',
    neighborhood: 'Pueblo de la Paz',
    role: 'Observadora de aves',
    quote:
      'Que el Sector Norte quede protegido con miradores tranquilos permite seguir viendo benteveos, cisnes y carpinchos en su propio ambiente.',
    theme: 'naturaleza',
    themeLabel: 'Naturaleza y Humedales',
    flora: 'camalote',
    floraLabel: 'Camalotes del espejo de agua',
    accentHex: '#329FD8',
    surfaceHex: '#E8F6FD',
  },
  {
    id: 'testimonio-horacio',
    author: 'Horacio Domínguez',
    neighborhood: 'San Vicente Oeste',
    role: 'Vecino de toda la vida',
    quote:
      'Recuperar el camping entre los árboles y unir la laguna con la Vieja Estación y la Quinta es cuidar nuestra historia para que la disfruten los nietos.',
    theme: 'identidad',
    themeLabel: 'Identidad y Futuro',
    flora: 'ceibo',
    floraLabel: 'Flor de ceibo autóctona',
    accentHex: '#8CBF75',
    surfaceHex: '#F1F9ED',
  },
  {
    id: 'testimonio-lucia',
    author: 'Lucía Pereyra',
    neighborhood: 'Alejandro Korn / San Vicente',
    role: 'Emprendedora gastronómica',
    quote:
      'Ordenar los accesos y tener paradores cerca del agua hace que muchas más familias elijan pasar todo el fin de semana acá.',
    theme: 'encuentro',
    themeLabel: 'Paseo y Encuentro',
    flora: 'cortadera',
    floraLabel: 'Pajonales dorados',
    accentHex: '#F2C53D',
    surfaceHex: '#FEF9E8',
  },
  {
    id: 'testimonio-tomas',
    author: 'Tomás Villalba',
    neighborhood: 'Villa Coll',
    role: 'Estudiante e integrante ambiental',
    quote:
      'Crecimos escuchando historias de la Laguna del Ojo; hoy verla proyectada con transparencia y participación vecinal nos entusiasma de verdad.',
    theme: 'identidad',
    themeLabel: 'Identidad y Futuro',
    flora: 'camalote',
    floraLabel: 'Lirios y flora lacustre',
    accentHex: '#96D5F4',
    surfaceHex: '#EAF6FD',
  },
];

