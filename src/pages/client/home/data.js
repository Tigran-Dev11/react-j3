import { v4 as uuid } from "uuid";
import { IMAGES } from "/src/assets/images";

export const posts = (t) => [
  {
    id: 1,
    date: t("home.posts.date"),
    description: t("home.posts.description"),
  },
  {
    id: 2,
    date: t("home.posts.date"),
    description: t("home.posts.description"),
  },
  {
    id: 3,
    date: t("home.posts.date"),
    description: t("home.posts.description"),
  },
  {
    id: 4,
    date: t("home.posts.date"),
    description: t("home.posts.description"),
  },
];

export const category = (t) => [
  {
    id: uuid(),
    img: IMAGES.businesIcon,
    title: t("home.category.busines"),
    description: t("home.posts.description"),
  },
  {
    id: uuid(),
    img: IMAGES.startUpIcon,
    title: t("home.category.startUp"),
    description: t("home.posts.description"),
  },
  {
    id: uuid(),
    img: IMAGES.economyIcon,
    title: t("home.category.economy"),
    description: t("home.posts.description"),
  },
  {
    id: uuid(),
    img: IMAGES.technologyIcon,
    title: t("home.category.technology"),
    description: t("home.posts.description"),
  },
];

export const logos = [
  {
    id: 1,
    src: IMAGES.logoFeatureIn,
  },
  {
    id: 2,
    src: IMAGES.loremLogo,
  },
  {
    id: 3,
    src: IMAGES.logoLightDark,
  },
  {
    id: 4,
    src: IMAGES.logoRound,
  },
  {
    id: 5,
    src: IMAGES.logoBurger,
  },
  {
    id: 6,
    src: IMAGES.logoSquare,
  },
];
export const authors = (t) => [
  {
    id: uuid(),
    img: IMAGES.authorFloyd,
    name: t("home.author.name.floydMiles"),
    content: t("home.author.content"),
    socialMedia: [
      IMAGES.facebookIcon,
      IMAGES.twitterIcon,
      IMAGES.instagramIcon,
      IMAGES.linkdinIcon,
    ],
  },
  {
    id: uuid(),
    img: IMAGES.authorDianne,
    name: t("home.author.name.dianneRussell"),
    content: t("home.author.content"),
    socialMedia: [
      IMAGES.facebookIcon,
      IMAGES.twitterIcon,
      IMAGES.instagramIcon,
      IMAGES.linkdinIcon,
    ],
  },
  {
    id: uuid(),
    img: IMAGES.authorJenni,
    name: t("home.author.name.jenniWilson"),
    content: t("home.author.content"),
    socialMedia: [
      IMAGES.facebookIcon,
      IMAGES.twitterIcon,
      IMAGES.instagramIcon,
      IMAGES.linkdinIcon,
    ],
  },
  {
    id: uuid(),
    img: IMAGES.authorlessile,
    name: t("home.author.name.lessileAlexandr"),
    content: t("home.author.content"),
    socialMedia: [
      IMAGES.facebookIcon,
      IMAGES.twitterIcon,
      IMAGES.instagramIcon,
      IMAGES.linkdinIcon,
    ],
  },
  {
    id: uuid(),
    img: IMAGES.authorGuyHawkin,
    name: t("home.author.name.guyHawkin"),
    content: t("home.author.content"),
    socialMedia: [
      IMAGES.facebookIcon,
      IMAGES.twitterIcon,
      IMAGES.instagramIcon,
      IMAGES.linkdinIcon,
    ],
  },
  {
    id: uuid(),
    img: IMAGES.authorEleanorPena,
    name: t("home.author.name.eleanorPena"),
    content: t("home.author.content"),
    socialMedia: [
      IMAGES.facebookIcon,
      IMAGES.twitterIcon,
      IMAGES.instagramIcon,
      IMAGES.linkdinIcon,
    ],
  },
  {
    id: uuid(),
    img: IMAGES.authorJacobJones,
    name: t("home.author.name.jacobJones"),
    content: t("home.author.content"),
    socialMedia: [
      IMAGES.facebookIcon,
      IMAGES.twitterIcon,
      IMAGES.instagramIcon,
      IMAGES.linkdinIcon,
    ],
  },
  {
    id: uuid(),
    img: IMAGES.authorRobertFox,
    name: t("home.author.name.robertFox"),
    content: t("home.author.content"),
    socialMedia: [
      IMAGES.facebookIcon,
      IMAGES.twitterIcon,
      IMAGES.instagramIcon,
      IMAGES.linkdinIcon,
    ],
  },
];
