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
import figma from '~/public/icons/figma.png';
import tanstackQuery from '~/public/icons/tanstack_query.png';
import zod from '~/public/icons/zod.png';
import prisma from '~/public/icons/prisma.png';
import type { StaticImageData } from 'next/image';

export type Techno = {
  name: string;
  icon: StaticImageData;
};

export type TechoCategory = {
  name: string;
  list: Record<string, Techno>;
};
export type Technos = {
  frontend: TechoCategory;
  backend: TechoCategory;
  environnement: TechoCategory;
};

export const technos = {
  frontend: {
    name: 'Front-End',
    list: {
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
      react: {
        name: 'React',
        icon: reactIcon,
      },
      nextjs: {
        name: 'Next.js',
        icon: nextIcon,
      },
      tanstackQuery: {
        name: 'Tanstack Query',
        icon: tanstackQuery,
      },
      zod: {
        name: 'Zod',
        icon: zod,
      },
      prisma: {
        name: 'Prisma',
        icon: prisma,
      },
      tailwind: {
        name: 'Tailwind CSS',
        icon: tailwindIcon,
      },
      styledcomponents: {
        name: 'Styled Components',
        icon: styledComponentsIcon,
      },
    },
  },
  backend: {
    name: 'Back-End',
    list: {
      nodejs: {
        name: 'Node.js',
        icon: nodejsIcon,
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
    },
  },
  environnement: {
    name: 'Environnement',
    list: {
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
    },
  },
  ui: {
    name: 'UI',
    list: {
      figma: {
        name: 'Figma',
        icon: figma,
      },
    },
  },
};
