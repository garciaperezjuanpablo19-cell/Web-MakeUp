const MARCA = 'Make Up\nAngelica Cardenas';
const MARCA_COMPLETA = 'Make Up Angelica Cardenas';
const WHATSAPP = '573000000000';
const INSTAGRAM = 'https://instagram.com/tuusuario';
const FACEBOOK = '';
const TIKTOK = '';

const CATEGORIAS = {
  bases: {
    titulo: 'Bases',
    texto: 'Bases y correctores en tonos para cada piel.',
    imagen: 'media/carrusel/bases-atenea.jpeg',
    colores: ['#ecd6c8', '#d9b8a4']
  },
  labiales: {
    titulo: 'Labiales',
    texto: 'Satinados, mate y tintas en tonos fáciles de usar.',
    imagen: 'media/productos/cuidado-capilar-ole.jpeg',
    colores: ['#ecc9cd', '#cf9aa8']
  },
  ojos: {
    titulo: 'Ojos',
    texto: 'Sombras y pestañinas para mirada de día o de noche.',
    imagen: 'media/productos/paleta-sombras.jpeg',
    colores: ['#d8cde6', '#ab9cc8']
  },
  rostro: {
    titulo: 'Rostro',
    texto: 'Rubores e iluminadores para dar vida a la piel.',
    imagen: 'media/productos/polvo-rostro-sandstorm.jpeg',
    colores: ['#cfdcd2', '#9fbba8']
  },
  accesorios: {
    titulo: 'Accesorios',
    texto: 'Brochas y esponjas para una aplicación perfecta.',
    imagen: 'media/productos/termo-cafe.jpeg',
    colores: ['#cbd8e6', '#9db5cf']
  }
};

const PRODUCTOS = [
  {
    id: 'bas-1', categoria: 'bases', destacado: true, etiqueta: 'Nuevo',
    nombre: 'Base fluida acabado piel', precio: 58000,
    imagen: 'media/carrusel/tonos-base-atenea.jpeg',
    descripcion: 'Base ligera de cobertura media que se funde con la piel y deja un acabado natural.',
    detalles: ['30 ml', 'Cobertura media modulable', 'Acabado satinado'],
    tonos: [
      { n: 'Marfil', c: '#f2dccb' }, { n: 'Beige', c: '#e6c3a5' },
      { n: 'Miel', c: '#cf9f7c' }, { n: 'Canela', c: '#a8734f' }, { n: 'Moca', c: '#7a4d33' }
    ]
  },
  {
    id: 'bas-2', categoria: 'bases',
    nombre: 'Corrector de alta cobertura', precio: 36000,
    imagen: 'media/carrusel/bases-atenea.jpeg',
    descripcion: 'Corrector cremoso para ojeras e imperfecciones, fácil de difuminar.',
    detalles: ['8 ml', 'Cobertura alta', 'Acabado mate suave'],
    tonos: [{ n: 'Claro', c: '#f0d3bd' }, { n: 'Medio', c: '#d8ab88' }, { n: 'Profundo', c: '#a8734f' }]
  },
  {
    id: 'lab-1', categoria: 'labiales', destacado: true,
    nombre: 'Labial satinado', precio: 38000,
    imagen: 'media/productos/perfume-capilar-clickhair.jpeg',
    descripcion: 'Color cómodo y definido con acabado satinado, ideal para uso diario.',
    detalles: ['3,5 g', 'Pigmento intenso', 'Se siente cremoso'],
    tonos: [
      { n: 'Rosa nude', c: '#c98f8a' }, { n: 'Malva', c: '#a9677a' },
      { n: 'Terracota', c: '#b5654f' }, { n: 'Ciruela', c: '#7d3c4f' }
    ]
  },
  {
    id: 'lab-2', categoria: 'labiales', etiqueta: 'Edición limitada',
    nombre: 'Tinta para labios y mejillas', precio: 29000,
    imagen: 'media/carrusel/aceite-capilar-elvive.jpeg',
    descripcion: 'Tinta ligera que se usa en labios y mejillas para un color de apariencia natural.',
    detalles: ['6 ml', 'Aplicador de precisión', 'Se construye por capas'],
    tonos: [{ n: 'Coral', c: '#e2796a' }, { n: 'Cereza', c: '#b3263f' }]
  },
  {
    id: 'ojo-1', categoria: 'ojos',
    nombre: 'Paleta de sombras neutras', precio: 64000,
    imagen: 'media/productos/paleta-sombras.jpeg',
    descripcion: 'Paleta versátil con acabados mate y satinados para looks de día y de noche.',
    detalles: ['12 tonos', 'Mate y satinados', 'Espejo incluido'],
    tonos: [{ n: 'Arena', c: '#d9b8a3' }, { n: 'Cobre', c: '#b88a74' }, { n: 'Cacao', c: '#8a5a4a' }, { n: 'Café', c: '#4a3530' }]
  },
  {
    id: 'ojo-2', categoria: 'ojos',
    nombre: 'Pestañina volumen', precio: 32000,
    imagen: 'media/productos/serum-capilar-elvive.jpeg',
    descripcion: 'Cepillo que separa y da volumen sin dejar grumos.',
    detalles: ['9 ml', 'Cepillo curvo', 'Fórmula negra intensa'],
    tonos: [{ n: 'Negro', c: '#1c1416' }]
  },
  {
    id: 'ros-1', categoria: 'rostro',
    nombre: 'Rubor en crema', precio: 34000,
    imagen: 'media/productos/protector-termico-ole.jpeg',
    descripcion: 'Rubor cremoso que se difumina con los dedos y deja un efecto de piel con color.',
    detalles: ['5 g', 'Acabado natural', 'Se aplica con dedos o brocha'],
    tonos: [{ n: 'Durazno', c: '#eeaa94' }, { n: 'Rosa', c: '#e59aa6' }]
  },
  {
    id: 'ros-2', categoria: 'rostro', destacado: true,
    nombre: 'Iluminador líquido', precio: 39000,
    imagen: 'media/productos/cuidado-capilar-ole.jpeg',
    descripcion: 'Luz suave para pómulos y puente de la nariz, se puede mezclar con la base.',
    detalles: ['15 ml', 'Acabado luminoso', 'Gota por gota'],
    tonos: [{ n: 'Champán', c: '#ecd0a8' }, { n: 'Rosado', c: '#efc4c6' }]
  },
  {
    id: 'acc-1', categoria: 'accesorios', destacado: true,
    nombre: 'Set de brochas esenciales', precio: 89000,
    imagen: 'media/productos/botella-mickey.jpeg',
    descripcion: 'Brochas para base, rubor, sombras y labios, con cerdas suaves que no sueltan pelo.',
    detalles: ['8 brochas', 'Cerdas sintéticas', 'Estuche incluido']
  },
  {
    id: 'acc-2', categoria: 'accesorios',
    nombre: 'Esponja para base', precio: 14000,
    imagen: 'media/productos/termo-cafe.jpeg',
    descripcion: 'Esponja de punta fina y base ancha para difuminar sin marcas.',
    detalles: ['Se usa húmeda', 'Lavable', 'Pack de 2'],
    tonos: [{ n: 'Rosa', c: '#efb9c0' }, { n: 'Salvia', c: '#b9cfbd' }]
  }
];
