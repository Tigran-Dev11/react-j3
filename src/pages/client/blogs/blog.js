import {v4 as uuid} from "uuid"
import { IMAGES } from './../../../assets/images/index';

export const blogs=(t)=>[
    {
        id:uuid(),
        img:IMAGES.blogPostFirst,
        title:t("home.category.startUp"),
        subTitle:t("blog.subTitle.design"),
        description:t("home.post.description"),
    },
    {
        id:uuid(),
        img:IMAGES.blogPostSecond,
        title:t("home.category.busines"),
        subTitle:t("blog.subTitle.webDesign"),
        description:t("home.post.description"),
    },
    {
        id:uuid(),
        img:IMAGES.blogPostThird,
        title:t("home.category.startUp"),
        subTitle:t("blog.subTitle.logoDesign"),
        description:t("home.post.description"),
    },
    {
        id:uuid(),
        img:IMAGES.blogPostFourth,
        title:t("home.category.technology"),
        subTitle:t("blog.subTitle.figmaDesign"),
        description:t("home.post.description"),
    },
    {
        id:uuid(),
        img:IMAGES.blogPostFirst,
        title:t("home.category.economy"),
        subTitle:t("blog.subTitle.uiDesign"),
        description:t("home.post.description"),
    },
]