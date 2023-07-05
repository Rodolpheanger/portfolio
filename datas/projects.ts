import booki from '~/public/image/booki.png';
import ohmyfood from '~/public/image/ohmyfood.png';
import laChouetteAgence from '~/public/image/la_chouette_agence.png';
import kanap from '~/public/image/kanap.png';
import hotTakes from '~/public/image/hot_takes.png';
import groupomania from '~/public/image/groupomania.png';
import espritNature from '~/public/image/esprit_nature.png';
import quizKaamelott from '~/public/image/quiz_kaamelott.png';
import type { Techno } from '~/datas/technos';
import { technos } from '~/datas/technos';
import type { StaticImageData } from 'next/image';

export type Project = {
  id: number;
  name: string;
  description: string;
  webSiteUrl?: string;
  gitHubUrl?: string;
  imgUrl: string;
  img: StaticImageData;
  technos?: Techno[];
};

const {
  html,
  css,
  sass,
  tailwind,
  js,
  ts,
  react,
  nextjs,
  nodejs,
  mongodb,
  mysql,
  postgresql,
} = technos;

export const projects: Project[] = [
  {
    id: 0,
    name: 'Booki',
    description:
      "2éme projet de ma formation 'Développeur Web', le but est d'intégrer une maquette fournie de manière responsive en utilisant uniquement du HTML et du CSS.",
    webSiteUrl: 'https://booki.rodolpheanger.fr',
    gitHubUrl: 'https://github.com/Rodolpheanger/P2_anger_rodolphe',
    imgUrl: '../public/image/booki.png',
    img: booki,
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
    img: ohmyfood,
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
    img: laChouetteAgence,
    technos: [html, css],
  },
  {
    id: 4,
    name: 'Kanap',
    description:
      "5ème projet de ma formation 'Développeur Web', le but ici est de rendre dynamique, via l'utilisation de javascript vanilla, un site e-commerce pour lequel l'HTML et le CSS sont fournis. Il faut également le 'connecter' à un back-end déjà existant, afin de récupérer les données des produits et simuler le parcours utilisateur complet pour le passage d'une commande de canapé.",
    gitHubUrl: 'https://github.com/Rodolpheanger/P5_anger_rodolphe',
    imgUrl: '../public/image/kanap.png',
    img: kanap,
    technos: [js],
  },
  {
    id: 5,
    name: 'Hot Takes',
    description:
      "6ème projet de ma formation 'Développeur Web', l'objectif est de réaliser l'API d'un site de vente de sauces piquantes pour lequel le front-end est fourni. Il faut également mettre en place une base de donnée NoSQL sur MongoDb.",
    gitHubUrl: 'https://github.com/Rodolpheanger/P6_backend',
    imgUrl: '../public/image/hot_takes.png',
    img: hotTakes,
    technos: [nodejs, mongodb],
  },
  {
    id: 7,
    name: 'Groupomania',
    description:
      "7ème et dernier projet de ma formation 'Développeur Web', il faut ici réaliser une webapp de type réseau social d'entreprise. Les utilisateurs doivent pouvoir s'enregistrer, se connecter, ajouter, commenter, liker et modifier des posts avec ou sans image et également compléter et modifier leur profil.",
    gitHubUrl: 'https://github.com/Rodolpheanger/P7_anger_rodolphe',
    imgUrl: '../public/image/groupomania.png',
    img: groupomania,
    technos: [nodejs, ts, mysql, react, sass],
  },
  {
    id: 8,
    name: 'Esprit Nature',
    description:
      "Site vitrine réalisé pour une coiffeuse à domicile. Suite à nos échanges nous avons trouvé un style qui se veut volontairement simple et 'naturel' afin de représenter au mieux les valeurs de son entreprise.",
    webSiteUrl: 'https://nadege-esprit-nature.com',
    imgUrl: '../public/image/esprit_nature.png',
    img: espritNature,
    technos: [html, sass, ts],
  },
  {
    id: 9,
    name: 'Quiz Kaamelott',
    description:
      "MVP d'une application de quiz sur les citations de la série 'Kaamelott'. Une citation aléatoire issue de la base de données est affichée, ainsi que quatre choix pour le personnage à l'origine de la citation et l'utilisateur doit trouver la bonne réponse.",
    webSiteUrl: 'https://quiz-kaamelott.rodolpheanger.fr',
    imgUrl: '../public/image/quiz_kaamelott.png',
    img: quizKaamelott,
    technos: [nextjs, react, ts, tailwind, postgresql],
  },
];
