import bookiMin from '~/public/image/booki_min.png';
import bookiWebp from '~/public/image/booki.webp';
import ohmyfoodMin from '~/public/image/ohmyfood_min.png';
import ohmyfoodWebp from '~/public/image/ohmyfood.webp';
import laChouetteAgenceMin from '~/public/image/la_chouette_agence_min.png';
import laChouetteAgenceWebp from '~/public/image/la_chouette_agence.webp';
import kanapMin from '~/public/image/kanap_min.png';
import kanapWebp from '~/public/image/kanap.webp';
import hotTakesMin from '~/public/image/hot_takes_min.png';
import hotTakesWebp from '~/public/image/hot_takes.webp';
import groupomaniaMin from '~/public/image/groupomania_min.png';
import groupomaniaWebp from '~/public/image/groupomania.webp';
import espritNatureMin from '~/public/image/esprit_nature_min.png';
import espritNatureWebp from '~/public/image/esprit_nature.webp';
import quizKaamelottMin from '~/public/image/quiz_kaamelott_min.png';
import quizKaamelottWebp from '~/public/image/quiz_kaamelott.webp';
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
import type { StaticImageData } from 'next/image';

export type Project = {
  id: number;
  name: string;
  description: string;
  webSiteUrl?: string;
  gitHubUrl?: string;
  imgUrl: string;
  imgMin: StaticImageData;
  imgWebp: StaticImageData;
  technos?: {
    name: string;
    icon: StaticImageData;
  }[];
};

const html = {
  name: 'HTML 5',
  icon: htmlIcon,
};
const css = {
  name: 'CSS 3',
  icon: cssIcon,
};
const sass = {
  name: 'Sass',
  icon: sassIcon,
};
const js = {
  name: 'Javascript',
  icon: javascriptIcon,
};
const ts = {
  name: 'Typescript',
  icon: typescriptIcon,
};
const nodejs = {
  name: 'Node JS',
  icon: nodejsIcon,
};
const react = {
  name: 'React JS',
  icon: reactIcon,
};
const mongodb = {
  name: 'Mongo DB',
  icon: mongodbIcon,
};
const mysql = {
  name: 'MySQL',
  icon: mysqlIcon,
};
const nextjs = {
  name: 'Next JS',
  icon: nextIcon,
};
const tailwind = {
  name: 'Tailwind CSS',
  icon: tailwindIcon,
};
const postgresql = {
  name: 'PostgreSQL',
  icon: postgresqlIcon,
};

export const projects: Project[] = [
  {
    id: 0,
    name: 'Booki',
    description:
      "2éme projet de ma formation 'Développeur Web', le but est d'intégrer une maquette fournie de manière responsive en utilisant uniquement du HTML et du CSS.",
    webSiteUrl: 'https://booki.rodolpheanger.fr',
    gitHubUrl: 'https://github.com/Rodolpheanger/P2_anger_rodolphe',
    imgUrl: '../public/image/booki.png',
    imgMin: bookiMin,
    imgWebp: bookiWebp,
    technos: [html, css],
  },
  {
    id: 1,
    name: 'Ohmyfood',
    description:
      "3ème projet de ma formation 'Développeur Web', le but est l'intégration d'une maquette de plusieurs pages comportant des animations à réaliser en CSS, le tout de manière responsive.",
    webSiteUrl: 'https://ohmyfood.rodolpheanger.fr',
    gitHubUrl: 'https://github.com/Rodolpheanger/RodolpheAnger_3_26122021',
    imgUrl: '../public/image/ohmyfood.png',
    imgMin: ohmyfoodMin,
    imgWebp: ohmyfoodWebp,
    technos: [html, css, sass],
  },
  {
    id: 2,
    name: 'La Chouette Agence',
    description:
      "4ème projet de ma formation 'Développeur Web', l'objectif est d'optimiser l’accessibilité, les performances ainsi que le SEO d'un site existant.",
    webSiteUrl: 'https://lachouetteagence.rodolpheanger.fr',
    gitHubUrl: 'https://github.com/Rodolpheanger/P4-Starting-website-New',
    imgUrl: '../public/image/la_chouette_agence.png',
    imgMin: laChouetteAgenceMin,
    imgWebp: laChouetteAgenceWebp,
    technos: [html, css],
  },
  {
    id: 4,
    name: 'Kanap',
    description:
      "5ème projet de ma formation 'Développeur Web', le but ici est de rendre dynamique, via l'utilisation de javascript vanilla, un site e-commerce pour lequel l'HTML et le CSS sont fournis. Il faut également le 'connecter' à un back-end déjà existant, afin de récupérer les données des produits et simuler le parcours utilisateur complet pour le passage d'une commande de canapé.",
    gitHubUrl: 'https://github.com/Rodolpheanger/P5_anger_rodolphe',
    imgUrl: '../public/image/kanap.png',
    imgMin: kanapMin,
    imgWebp: kanapWebp,
    technos: [js],
  },
  {
    id: 5,
    name: 'Hot Takes',
    description:
      "6ème projet de ma formation 'Développeur Web', l'objectif est de réaliser l'API d'un site de vente de sauces piquantes pour lequel le front-end est fourni. Il faut également mettre en place une base de donnée NoSQL sur MongoDb.",
    gitHubUrl: 'https://github.com/Rodolpheanger/P6_backend',
    imgUrl: '../public/image/hot_takes.png',
    imgMin: hotTakesMin,
    imgWebp: hotTakesWebp,
    technos: [nodejs, mongodb],
  },
  {
    id: 7,
    name: 'Groupomania',
    description:
      "7ème et dernier projet de ma formation 'Développeur Web', il faut ici réaliser une webapp de type réseau social d'entreprise. Les utilisateurs doivent pouvoir s'enregistrer, se connecter, ajouter, commenter, liker et modifier des posts avec ou sans image et également compléter et modifier leur profil.",
    gitHubUrl: 'https://github.com/Rodolpheanger/P7_anger_rodolphe',
    imgUrl: '../public/image/groupomania.png',
    imgMin: groupomaniaMin,
    imgWebp: groupomaniaWebp,
    technos: [nodejs, ts, mysql, react, sass],
  },
  {
    id: 8,
    name: 'Esprit Nature',
    description:
      "Site vitrine réalisé 'from scratch' pour une coiffeuse à domicile. Suite à nos échanges nous avons trouvé un style qui se veut volontairement simple et 'naturel' afin de représenter au mieux les valeurs de son entreprise.",
    webSiteUrl: 'https://nadege-esprit-nature.com',
    imgUrl: '../public/image/esprit_nature.png',
    imgMin: espritNatureMin,
    imgWebp: espritNatureWebp,
    technos: [html, sass, ts],
  },
  {
    id: 9,
    name: 'Quiz Kaamelott',
    description:
      "MVP d'une application de quiz sur les citations de la série'Kaamelott'. Une citation aléatoire issue de la base de données est affichée, ainsi que quatre choix, dont trois également aléatoires, pour le personnage à l'origine de la citation et l'utilisateur doit trouver la bonne réponse.",
    webSiteUrl: 'https://quiz-kaamelott.rodolpheanger.fr',
    imgUrl: '../public/image/quiz_kaamelott.png',
    imgMin: quizKaamelottMin,
    imgWebp: quizKaamelottWebp,
    technos: [nextjs, react, ts, tailwind, postgresql],
  },
];
