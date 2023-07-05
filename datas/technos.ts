import htmlIcon from '~/public/icons/html5.png';
import cssIcon from '~/public/icons/css3.png';
import sassIcon from '~/public/icons/sass.png';
import javascriptIcon from '~/public/icons/javascript.png';
import typescriptIcon from '~/public/icons/typescript.png';
import nodejsIcon from '~/public/icons/nodejs.png';
import reactIcon from '~/public/icons/react.png';
import mongodbIcon from '~/public/icons/mongodb.png';
import mysqlIcon from '~/public/icons/mysql.png';
import nextIcon from '~/public/icons/nextjs.png';
import tailwindIcon from '~/public/icons/tailwind.png';
import postgresqlIcon from '~/public/icons/postgresql.png';
import styledComponentsIcon from '~/public/icons/styled_components.png';
import npmIcon from '~/public/icons/npm.png';
import pnpmIcon from '~/public/icons/pnpm.png';
import yarnIcon from '~/public/icons/yarn.png';
import gitIcon from '~/public/icons/git.png';
import gitHubIcon from '~/public/icons/github.png';
import vscodeIcon from '~/public/icons/vscode.png';
import type { StaticImageData } from 'next/image';

export type Techno = {
  name: string;
  icon: StaticImageData;
};

export const technos = {
  html: {
    name: 'HTML 5',
    icon: htmlIcon,
  },
  css: {
    name: 'CSS 3',
    icon: cssIcon,
  },
  sass: {
    name: 'Sass',
    icon: sassIcon,
  },
  js: {
    name: 'Javascript',
    icon: javascriptIcon,
  },
  ts: {
    name: 'Typescript',
    icon: typescriptIcon,
  },
  nodejs: {
    name: 'Node JS',
    icon: nodejsIcon,
  },
  react: {
    name: 'React JS',
    icon: reactIcon,
  },
  nextjs: {
    name: 'Next JS',
    icon: nextIcon,
  },
  tailwind: {
    name: 'Tailwind CSS',
    icon: tailwindIcon,
  },
  styledcomponents: {
    name: 'Styled Components',
    icon: styledComponentsIcon,
  },
  mongodb: {
    name: 'Mongo DB',
    icon: mongodbIcon,
  },
  mysql: {
    name: 'MySQL',
    icon: mysqlIcon,
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: postgresqlIcon,
  },
  npm: {
    name: 'Npm',
    icon: npmIcon,
  },
  pnpm: {
    name: 'Pnpm',
    icon: pnpmIcon,
  },
  yarn: {
    name: 'Yarn',
    icon: yarnIcon,
  },
  git: {
    name: 'Git',
    icon: gitIcon,
  },
  github: {
    name: 'GitHub',
    icon: gitHubIcon,
  },
  vscode: {
    name: 'VS Code',
    icon: vscodeIcon,
  },
};
