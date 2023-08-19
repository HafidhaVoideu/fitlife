// ******************* BlogItems *************************

import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";

// ******************* Classes *************************

import class1 from "../assets/class-1.jpg";
import class2 from "../assets/class-2.jpg";
import class3 from "../assets/class-3.jpg";
import class4 from "../assets/class-4.jpg";

import icon1 from "../assets/class-icon-1.png";
import icon2 from "../assets/class-icon-2.png";
import icon3 from "../assets/class-icon-3.png";
import icon4 from "../assets/class-icon-4.png";

export const blogArticles = [
  {
    id: 1,
    img: blog1,
    date: "7 July 2023",

    title: "Going to the gym for the first time",
    des: "Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.",
  },
  {
    id: 2,
    img: blog2,
    date: "28 june 2023",
    title: "Parturient accumsan cacus pulvinar magna",
    des: "Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.",
  },
  {
    id: 3,
    img: blog3,
    date: "01 August 2023",
    title: "Risus purus namien parturient accumsan cacus",
    des: "Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus quam. In hac habitasse platea dictumst.",
  },
];

export const classes = [
  {
    id: 1,
    photo: class1,
    icon: icon1,
    classType: "Weight Lifting",
    des: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    percentage: 20,
  },
  {
    id: 2,
    photo: class2,
    icon: icon2,
    classType: "cardio & Strength",
    des: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    percentage: 70,
  },
  {
    id: 3,
    photo: class3,
    icon: icon3,
    classType: "Power Yoga",
    des: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    percentage: 90,
  },
  {
    id: 4,
    photo: class4,
    icon: icon4,
    classType: "The Fitness Pack",
    des: "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    percentage: 60,
  },
];
