import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="IArte UDG"
        description="Comprendido por una landing page, 
        formulario de registro y una galería 3D realizados en el
        marco del concurso de Arte generado por IA de la Universidad de Guadalajara"
        link="https://iarte.inventores.org/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Fire',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Three.js</Tags>
            <Tags color={ColorTags.VIOLET}>PHP</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Blog autogestivo con .Astro"
        description="Proyecto de buenas prácticas y aprendizaje de astro 
        hecha con TypeScript & React estilizada mediante Tailwind CSS ⚡️ 
        TypeScript + ESLint + Prettier + Husky + Lint-Staged + Commitlint + VSCode"
        link="https://github.com/SnowTrash/astro-blog"
        img={{
          src: '/assets/images/project-fire.png',
          alt: 'Project Maps',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>LaTex</Tags>
            <Tags color={ColorTags.ROSE}>Firebase</Tags>
            <Tags color={ColorTags.VIOLET}>Tres.js</Tags>
          </>
        }
      />
    </div>
    <Project
      name="Visita Chapala - Google Sites"
      description="Proyecto simple de investigación e incrustados varios acerca del Lago de Chapala"
      link="https://sites.google.com/alumnos.udg.mx/visitchapala"
      img={{
        src: '/assets/images/project-maps.png',
        alt: 'Project Web Design',
      }}
      category={
        <>
          <Tags color={ColorTags.FUCHSIA}>Google Sites</Tags>
          <Tags color={ColorTags.LIME}>Audio</Tags>
          <Tags color={ColorTags.SKY}>Writing</Tags>
        </>
      }
    />
  </Section>
);

export { ProjectList };
