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
  date: number;
  description: string;
  webSiteUrl?: string;
  gitHubUrl?: string;
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
    date: 2021,
    description:
      "2éme projet de la formation 'Développeur Web' d'OpenClassrooms, le but est d'intégrer des maquettes desktop et mobile fournies de manière responsive en utilisant uniquement du HTML et du CSS. Il faut également décider du design pour la version tablette.",
    webSiteUrl: 'https://booki.rodolpheanger.fr',
    gitHubUrl: 'https://github.com/Rodolpheanger/P2_anger_rodolphe',
    img: booki,
    technos: [html, css],
  },
  {
    id: 1,
    name: 'Ohmyfood',
    date: 2022,
    description:
      "3ème projet de la formation, le but est l'intégration d'une maquette mobile, donc en 'mobile first', de plusieurs pages comportant des animations à réaliser en CSS uniquement. Il faut également créer un loader animé et décider du design pour les formats tablette et desktop.",
    webSiteUrl: 'https://ohmyfood.rodolpheanger.fr',
    gitHubUrl: 'https://github.com/Rodolpheanger/RodolpheAnger_3_26122021',
    img: ohmyfood,
    technos: [html, css, sass],
  },
  {
    id: 2,
    name: 'La Chouette Agence',
    date: 2022,
    description:
      "4ème projet de la formation, l'objectif est d'optimiser l’accessibilité, les performances ainsi que le SEO d'un site existant.",
    webSiteUrl: 'https://lachouetteagence.rodolpheanger.fr',
    gitHubUrl: 'https://github.com/Rodolpheanger/P4-Starting-website-New',
    img: laChouetteAgence,
    technos: [html, css],
  },
  {
    id: 4,
    name: 'Kanap',
    date: 2022,
    description:
      "5ème projet de la formation, le but ici est de rendre dynamique, via l'utilisation de javascript 'vanilla', un site e-commerce pour lequel l'HTML et le CSS sont fournis. Il faut également le 'connecter' à une API existante, afin de récupérer les données des produits et simuler le parcours utilisateur complet pour la commande d'un canapé.",
    gitHubUrl: 'https://github.com/Rodolpheanger/P5_anger_rodolphe',
    img: kanap,
    technos: [js],
  },
  {
    id: 5,
    name: 'Hot Takes',
    date: 2022,
    description:
      "6ème projet de la formation, l'objectif est de réaliser l'API d'un site de vente de sauces piquantes pour lequel le front-end est fourni. Il faut également mettre en place une base de donnée NoSQL sur MongoDb.",
    gitHubUrl: 'https://github.com/Rodolpheanger/P6_backend',
    img: hotTakes,
    technos: [nodejs, mongodb],
  },
  {
    id: 7,
    name: 'Groupomania',
    date: 2022,
    description:
      "Dernier projet de la formation, il faut ici réaliser une webapp de type réseau social d'entreprise. Les utilisateurs doivent pouvoir s'enregistrer, se connecter, ajouter, commenter, liker et modifier des posts avec ou sans image et également compléter et modifier leur profil.",
    gitHubUrl: 'https://github.com/Rodolpheanger/P7_anger_rodolphe',
    img: groupomania,
    technos: [nodejs, ts, mysql, react, sass],
  },
  {
    id: 8,
    name: 'Esprit Nature',
    date: 2023,
    description:
      "Site vitrine réalisé pour une coiffeuse à domicile. Suite à nos échanges nous avons trouvé un style qui se veut volontairement simple et 'naturel' afin de représenter au mieux les valeurs de son entreprise.",
    webSiteUrl: 'https://nadege-esprit-nature.com',
    img: espritNature,
    technos: [html, sass, ts],
  },
  {
    id: 9,
    name: 'Quiz Kaamelott',
    date: 2023,
    description:
      "MVP d'une application de quiz sur les citations de la série 'Kaamelott'. Une citation aléatoire issue de la base de données est affichée, ainsi que quatre choix pour le personnage à l'origine de la citation et l'utilisateur doit trouver la bonne réponse.",
    webSiteUrl: 'https://quiz-kaamelott.rodolpheanger.fr',
    img: quizKaamelott,
    technos: [nextjs, react, ts, tailwind, postgresql],
  },
];
