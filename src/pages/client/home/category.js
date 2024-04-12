import {v4 as uuid} from "uuid"
import { IMAGES } from "./../../../assets/images"

export const category= (t)=>[

    {
        id:uuid(),
        img:IMAGES.businesIcon,
        title:t("home.category.busines"),
        description:t('home.posts.description'),
    },
    {
        id:uuid(),
        img:IMAGES.startUpIcon,
        title:t("home.category.startUp"),
        description:t('home.posts.description'),
    },
    {
        id:uuid(),
        img:IMAGES.economyIcon,
        title:t("home.category.economy"),
        description:t('home.posts.description'),
    },
    {
        id:uuid(),
        img:IMAGES.technologyIcon,
        title:t("home.category.technology"),
        description:t('home.posts.description'),
    },

]