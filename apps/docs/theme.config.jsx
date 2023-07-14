const configuration = {
  logo: <span>Jesús Bossa / GDG Barranquilla</span>,
  project: {
    link: 'https://github.com/makinox/fife',
  },
  docsRepositoryBase: 'https://github.com/makinox/fife/tree/main/apps/docs',

  useNextSeoProps() {
    return {
      titleTemplate: '%s – Taller de Jesus Bossa en la GDG Barranquilla',
    };
  },
};

export default configuration;
