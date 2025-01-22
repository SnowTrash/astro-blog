import { Section } from 'astro-boilerplate-components';

import astroLogo from '../../public/assets/images/astro-icon-light-gradient.svg';
import firebaseLogo from '../../public/assets/images/firebase.svg';
import githubLogo from '../../public/assets/images/github-mark.svg';

const Sponsors = () => (
  <Section title="Contruuido con: ">
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="max-h-40">
          {/*  <td className="border-2 border-gray-300 p-3">
            <a
              href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
              target="_blank"
            >
              <img src={sentryLogo.src} alt="Sentry" width={260} height={224} />
            </a>
          </td> */}
          {/* <td className="border-2 border-gray-300 p-3">
            <a
              href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
              target="_blank"
            >
              <img
                src={betterStackLogo.src}
                alt="Better Stack"
                width={260}
                height={224}
              />
            </a>
          </td> */}
          <td className="border-2 border-gray-300 p-3">
            <a href="https://astro.build/">
              <img
                src={astroLogo.src}
                alt="Astro Framework"
                width={60}
                height={24}
              />
            </a>
          </td>
        </tr>
        <tr className="max-h-40">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://firebase.google.com/" target="_blank">
              <img
                src={firebaseLogo.src}
                alt="Autentificacion y Host mediante Firebase"
                width={60}
                height={24}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://github.com/" target="_blank">
              <img
                src={githubLogo.src}
                alt="Github para control de versiones y almacenamiento"
                width={60}
                height={24}
              />
            </a>
          </td>
          {/* <td className="border-2 border-gray-300 p-3">
            <a href="https://l.crowdin.com/next-js" target="_blank">
              <img
                src={crowdinLogo.src}
                alt="Crowdin"
                width={260}
                height={224}
              />
            </a>
          </td> */}
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
