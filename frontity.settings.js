const settings = {
  name: 'fisioespalda',
  state: {
    frontity: {
      url: 'https://fisioespalda.com.uy',
      title: 'Clínica Fisioespalda especialistas tratamientos de espalda y columna, dolor crónico y fibromialgia',
      description: 'En clínica Fisioespalda encontrarás tratamiento especializado para tu dolor de columna, dolor de espalda, fibromialgia y mucho más, a cargo de un equipo altamente calificado y con atención humana.',
      keywords: 'Dolor de espalda, Fisioterapia, Fibromialgia, Infrared, Dolor de Columna, Hidroterapia, Ciática, Ciatalgia, Dorsalgia, Dolor Cervical, Artrosis de Columna vertebral, Hernias y Protrusiones de disco, Canal cervical,  Lumbar estrecho, Cervicalgia-cervicobraquialgia, Dorsalgia, Lumbalgia, Lumbociatalgia, Lumbocruralgia, Lumbalgia en el embarazo, Escoliosis, Espondilolistesis, Espondilólisis, Postoperatorios de cirugía de columna (Artrodesis, cifoplastia, etc.), Dolor crónico miofascial, Frontity'
    }
  },
  packages: [
    'frontity-contact-form-7',
    {
      name: '@frontity/mars-theme',
      state: {
        theme: {
          menu: [
            [
              'Home',
              '/'
            ],
            [
              'Sobre Nosotros',
              '/sobre-nosotros/'
            ],
            [
              'Contacto',
              '/contactanos/'
            ]
          ],
          featured: {
            showOnList: false,
            showOnPost: false
          }
        }
      }
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: 'http://fisioespaldaweb.neoimage.net/wp-json'
        }
      }
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
    '@frontity/head-tags'
  ]
};

export default settings;
