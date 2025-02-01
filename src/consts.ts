import image1 from "./images/categoriesImages/ProassistBlogEdukacyjny1.png";
import image2 from "./images/categoriesImages/ProassistBlogEdukacyjnyLista.png";
import image3 from "./images/categoriesImages/SuzyHazelwood1301585.png";
import image4 from "./images/categoriesImages/Zrzutekranu2022-04-29o14.571.png";
import arrowNavigation from "./images/arrowNavigation.png";
import postImage from "./images/postImg.png";
import closeButton from "./images/closeButton.png";

import starFull from "./images/StarFull.png";
import starStroke from "./images/StarStroke.png";
import arrowLeft from "./images/ArrowLeft.png";

import rightSlider from "./images/rightSlider.png";
import leftSlider from "./images/leftSlider.png";

import icon1 from "./images/categoriesIcons/Ikona wiedzy o koronawirusie.png";
import icon2 from "./images/categoriesIcons/Proassist Blog Edukacyjny Frame.png";
import icon3 from "./images/categoriesIcons/Proassist Frame (1).png";
import icon4 from "./images/categoriesIcons/Proassist Frame.png";
import { Category } from "./types";

export const BaseURL =
  "https://my-json-server.typicode.com/CodingTigerPaw/blogPosts/posts";
export const CategoriesData = [
  {
    title: "wiedza",
    icon: icon1,
    image: image1,
    bgColor: "#444E8D",
    color: "white",
    category: Category.knowledge,
  },
  {
    title: "inspiracje",
    icon: icon2,
    image: image2,
    bgColor: "#FFBF42",
    color: "black",
    category: Category.inspiration,
  },
  {
    title: "interpretacje",
    icon: icon3,
    image: image3,
    bgColor: "#D94F4F",
    color: "white",
    category: Category.interpretations,
  },
  {
    title: "dostępne",
    icon: icon4,
    image: image4,
    bgColor: "#82E49A",
    color: "black",
    category: Category.access,
  },
];

export const icons = {
  starFull,
  starStroke,
  arrowLeft,
  arrowNavigation,
  closeButton,
};

export const postImg = {
  postImage,
};

export const favoriteStorageKey = "favorites";

export const sliderIcons = {
  rightSlider,
  leftSlider,
};
