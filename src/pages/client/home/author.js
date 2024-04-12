
import {v4 as uuid} from  "uuid";
import { IMAGES } from "../../../assets/images";


export const authors = (t)=>[
    {
        id:uuid(),
        img:IMAGES.authorFloyd,
        name:t("home.author.name.floydMiles"),
        content:t("home.author.content"),
        socialMedia:[IMAGES.facebookIcon,IMAGES.twitterIcon,IMAGES.instagramIcon, IMAGES.linkdinIcon]
    },
    {
        id:uuid(),
        img:IMAGES.authorDianne,
        name:t("home.author.name.dianneRussell"),
        content:t("home.author.content"),
        socialMedia:[IMAGES.facebookIcon,IMAGES.twitterIcon,IMAGES.instagramIcon, IMAGES.linkdinIcon]
    },
    {
        id:uuid(),
        img:IMAGES.authorJenni,
        name:t("home.author.name.jenniWilson"),
        content:t("home.author.content"),
        socialMedia:[IMAGES.facebookIcon,IMAGES.twitterIcon,IMAGES.instagramIcon, IMAGES.linkdinIcon]
    },
    {
        id:uuid(),
        img: IMAGES.authorlessile,
        name:t("home.author.name.lessileAlexandr"),
        content:t("home.author.content"),
        socialMedia:[IMAGES.facebookIcon,IMAGES.twitterIcon,IMAGES.instagramIcon, IMAGES.linkdinIcon]
    }

]