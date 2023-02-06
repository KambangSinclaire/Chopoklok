// all images imported from images directory
import product_01_image_01 from "../Images/product_01.jpg";
import product_01_image_02 from "../Images/product_01.1.jpg";
import product_01_image_03 from "../Images/product_01.3.jpg";



import product_02_image_01 from "../Images/product_2.1.jpg";
import product_02_image_02 from "../Images/product_2.2.jpg";
import product_02_image_03 from "../Images/product_2.3.jpg";

import product_03_image_01 from "../Images/product_3.1.jpg";
import product_03_image_02 from "../Images/product_3.2.jpg";
import product_03_image_03 from "../Images/product_3.3.jpg";

import product_04_image_01 from "../Images/product_4.1.jpg";
import product_04_image_02 from "../Images/product_4.2.jpg";
import product_04_image_03 from "../Images/product_4.3.png";

import product_05_image_01 from "../Images/product_04.jpg";
import product_05_image_02 from "../Images/product_08.jpg";
import product_05_image_03 from "../Images/product_09.jpg";

import product_06_image_01 from "../Images/bread(1).png";
import product_06_image_02 from "../Images/bread(2).png";
import product_06_image_03 from "../Images/bread(3).png";

import African_1 from "../Images/African_food_1_Achu.jpeg";
import African_2 from "../Images/African_food_2_Eru_and_garri.jpeg";
import African_3 from "../Images/African_food_3_Cornchaf.png";
import African_4 from "../Images/African_food_4_Ekwang.png";
import African_5 from "../Images/African_food_5_Fufu-corn_and_huckleberry.jpeg";
import African_6 from "../Images/African_food_6_Ikok.jpeg";
import African_7 from "../Images/African_food_7_Kwacoco.jpeg";
import African_8 from "../Images/African_food_8_Ndole.jpeg";

import FastFood_001 from "../Images/fastFood_001.avif";
import FastFood_002 from "../Images/fastFood_002.png";
import FastFood_003 from "../Images/fastFood_003.png";

import Fruit_drink_001 from "../Images/Fruit_drink_001.png";
import Fruit_drink_002 from "../Images/Fruit_drink_002.png";
import Fruit_drink_003 from "../Images/Fruit_drink_003.png";

import IceCream_001 from "../Images/Ice_cream_001.png";
import IceCream_002 from "../Images/Ice_cream_002.png";
import IceCream_003 from "../Images/Ice_cream_003.png";


const Products = [
  {
    id: 1,
    title: "Chicken Burger",
    price: '24.0 FCFA',
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: 2,
    title: "Vegetarian Pizza",
    price: '24.0 FCFA',
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 3,
    title: "Double Cheese Margherita",
    price: '24.0 FCFA',
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 4,
    title: "Maxican Green Wave",
    price: '24.0 FCFA',
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 5,
    title: "Cheese Burger",
    price:'24.0 FCFA',
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 6,
    title: "Royal Cheese Burger",
    price: '24.0 FCFA',
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 7,
    title: "Seafood Pizza",
    price: '24.0 FCFA',
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 8,
    title: "Thin Cheese Pizza",
    price: '24.0 FCFA',
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 9,
    title: "Pizza With Mushroom",
    price:'24.0 FCFA',
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 10,
    title: "Classic Hamburger",
    price:'24.0 FCFA',
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 11,
    title: "Crunchy Bread ",
    price: '24.0 FCFA',
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 12,
    title: "Delicious Bread ",
    price: '24.0 FCFA' ,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 13,
    title: "Loaf Bread ",
    price:'24.0 FCFA' ,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",
    cart: false,
    quantity: 1,

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 14,
    title: "Ekwang",
    price: 18.0,
    image01: African_4,
    image02: African_4,
    image03: African_4,
    category: "African",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 15,
    title: "Corn-Chaf",
    price: 12.0,
    image01: African_3,
    image02: African_3,
    image03: African_3,
    category: "African",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 16,
    title: "Achu",
    price: 20.0,
    image01: African_1,
    image02: African_1,
    image03: African_1,
    category: "African",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 17,
    title: "Eru and Garri",
    price: 15.0,
    image01: African_2,
    image02: African_2,
    image03: African_2,
    category: "African",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 18,
    title: "Fufu Corn and Huckleberry",
    price: 25.0,
    image01: African_5,
    image02: African_5,
    image03: African_5,
    category: "African",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 19,
    title: "Ikok",
    price: 20.0,
    image01: African_6,
    image02: African_6,
    image03: African_6,
    category: "African",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 20,
    title: "Kwacoco",
    price: 17.0,
    image01: African_7,
    image02: African_7,
    image03: African_7,
    category: "African",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 21,
    title: "Ndolè",
    price: 13.0,
    image01: African_8,
    image02: African_8,
    image03: African_8,
    category: "African",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 22,
    title: "Fruit Drink 1",
    price: 6.0,
    image01: Fruit_drink_001,
    image02: Fruit_drink_001,
    image03: Fruit_drink_001,
    category: "Beverages",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 23,
    title: "Cocktail",
    price: 10.0,
    image01: Fruit_drink_002,
    image02: Fruit_drink_002,
    image03: Fruit_drink_002,
    category: "Beverages",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 24,
    title: "Assorted",
    price: 7.0,
    image01: Fruit_drink_003,
    image02: Fruit_drink_003,
    image03: Fruit_drink_003,
    category: "Beverages",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 25,
    title: "Cream in glass",
    price: 6.0,
    image01: IceCream_001,
    image02: IceCream_001,
    image03: IceCream_001,
    category: "Ice_Cream",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 26,
    title: "Cup Cream",
    price: 9.0,
    image01: IceCream_002,
    image02: IceCream_002,
    image03: IceCream_002,
    category: "Ice_Cream",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 27,
    title: "Bunches on plate cream",
    price: 10.0,
    image01: IceCream_003,
    image02: IceCream_003,
    image03: IceCream_003,
    category: "Ice_Cream",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 28,
    title: "Patotoe chips and burger",
    price: 14.0,
    image01: FastFood_001,
    image02: FastFood_001,
    image03: FastFood_001,
    category: "FastFood",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 29,
    title: "Potatoe chips burger and Pepper",
    price: 15.0,
    image01: FastFood_002,
    image02: FastFood_002,
    image03: FastFood_002,
    category: "FastFood",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 30,
    title: "Grilled chicken",
    price: 15.0,
    image01: FastFood_003,
    image02: FastFood_003,
    image03: FastFood_003,
    category: "FastFood",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  
];

export default Products;