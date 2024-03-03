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
          Hola , I'm <GradientText>Snow Trash</GradientText> 👋
        </>
      }
      description={
        <>
          Soy un vaquero de consola apasionado por{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            matematicas
          </a>{' '}
          y{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Poesia
          </a>{' '}
          por otro lado , me causan insomnio:{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Kaggle
          </a>{' '}
          y los{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Gatos
          </a>{' '}
          además he trabajado en proyectos de Desarrollo web con experiencias
          3D.{''}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
