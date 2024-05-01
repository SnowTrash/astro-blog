import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola , I'm <GradientText>Snow Trash</GradientText> 🪴
        </>
      }
      description={
        <>
          Vaquero de consola apasionado a las{' '}
          <a className="text-cyan-400 hover:underline" href="/posts/">
            Matematicas
          </a>{' '}
          y la{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="http://snowtrash.github.io/"
          >
            Poesia
          </a>{' '}
          además me causan insomnio los{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://medium.com/@juan.vargas2962"
          >
            Datos
          </a>{' '}
          y los{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://sketchfab.com/juan.vargas2962"
          >
            Gatos
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/cat-bird.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.kaggle.com/snowtrash">
            <HeroSocial src="/assets/images/kaggle-name.svg" alt="Kaggle" />
          </a>
          <a href="https://github.com/SnowTrash">
            <HeroSocial src="/assets/images/github-142.svg" alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/juanvargasudg/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://public.tableau.com/app/profile/juan.l.pez7306/vizzes">
            <HeroSocial
              src="/assets/images/tableau-icon.svg"
              alt="Tableau icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
