import htmlIcon from '~/public/icons/html5_small.png';
import cssIcon from '~/public/icons/css3_small.png';
import sassIcon from '~/public/icons/sass_small.png';
import javascriptIcon from '~/public/icons/javascript_small.png';
import typescriptIcon from '~/public/icons/typescript_small.png';
import nodejsIcon from '~/public/icons/nodejs_small.png';
import reactIcon from '~/public/icons/react_small.png';
import mongodbIcon from '~/public/icons/mongodb_small.png';
import mysqlIcon from '~/public/icons/mysql_small.png';
import nextIcon from '~/public/icons/nextjs_small.png';
import tailwindIcon from '~/public/icons/tailwind_small.png';
import postgresqlIcon from '~/public/icons/postgresql_small.png';
import styledComponentsIcon from '~/public/icons/styled_components_small.png';
import npmIcon from '~/public/icons/npm_small.png';
import pnpmIcon from '~/public/icons/pnpm_small.png';
import yarnIcon from '~/public/icons/yarn_small.png';
import gitIcon from '~/public/icons/git_small.png';
import gitHubIcon from '~/public/icons/github_small.png';
import vscodeIcon from '~/public/icons/vscode_small.png';
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
