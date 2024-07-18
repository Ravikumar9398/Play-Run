import React from "react";

const productsList = [
  {
    id: "001",
    title: "CLASSIC TRUNK",
    brand: "PlayRun",
    slogan: "Be a Men Choose Better One!",
    colors: ["#4f1515", "#1e3002", "#000000", "#ffffff", "#01063d"],
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1719385837/mens-trunk_odoqoa.png",

    CM: ["75cm", "80cm", "85cm", "90cm", "95cm", "100cm", "105cm", "110cm"],
    INCH: ["28in", "30in", "32in", "34in", "36in", "38in", "40in", "42in"],
    availableColors: ["black", "white", "blue", "red", "green", "brown"],

    description:
      "Made of combined cotton this classic trunk comes with double layer  ",
    // description has to be finished
    manufacturedBy:
      "VIJAYA LAKSHMI READYMADE AND INNER ZONE BSNL Office Road Narasaraopet, Guntur D.T AndhraPradesh",
    email: "prgarments.official@gmail.com",
    contact: "+91 92 9083 9084 ",
  },
  {
    id: "002",
    title: "LUXURY BRIEF",
    brand: "PlayRun",
    slogan: "Be a Men Choose Better One!",
    colors: ["#4f1515", "#1e3002", "#000000", "#ffffff", "#01063d"],
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1719385841/mens-cut-inner_w8nncm.png",

    CM: ["75cm", "80cm", "85cm", "90cm", "95cm", "100cm", "105cm", "110cm"],
    INCH: ["28in", "30in", "32in", "34in", "36in", "38in", "40in", "42in"],
    availableColors: ["black", "white", "blue", "red", "green", "brown"],

    description:
      "Made of combined cotton this classic trunk comes with double layer  ",
    // description has to be finished
    manufacturedBy:
      "VIJAYA LAKSHMI READYMADE AND INNER ZONE BSNL Office Road Narasaraopet, Guntur D.T AndhraPradesh",
    email: "prgarments.official@gmail.com",
    contact: "+91 92 9083 9084 ",
  },
  {
    id: "003",
    title: "PREMIUM VEST",
    brand: "PlayRun",
    slogan: "Be a Men Choose Better One!",
    colors: ["#4f1515", "#1e3002", "#000000", "#ffffff", "#01063d"],
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1719385813/mens_vest_ycjdrd.png",

    CM: ["75cm", "80cm", "85cm", "90cm", "95cm", "100cm", "105cm", "110cm"],
    INCH: ["28in", "30in", "32in", "34in", "36in", "38in", "40in", "42in"],
    availableColors: ["black", "white", "blue", "red", "green", "brown"],

    description:
      "Made of combined cotton this classic trunk comes with double layer  ",
    // description has to be finished
    manufacturedBy:
      "VIJAYA LAKSHMI READYMADE AND INNER ZONE BSNL Office Road Narasaraopet, Guntur D.T AndhraPradesh",
    email: "prgarments.official@gmail.com",
    contact: "+91 92 9083 9084 ",
  },
  {
    id: "004",
    title: "PREMIUM VEST",
    brand: "PlayRun",
    slogan: "Be a Men Choose Better One!",
    colors: ["#4f1515", "#1e3002", "#000000", "#ffffff", "#01063d"],
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1719645943/mens-full-vest_imn8ky.jpg",

    CM: ["75cm", "80cm", "85cm", "90cm", "95cm", "100cm", "105cm", "110cm"],
    INCH: ["28in", "30in", "32in", "34in", "36in", "38in", "40in", "42in"],
    availableColors: ["black", "white", "blue", "red", "green", "brown"],

    description:
      "Made of combined cotton this classic trunk comes with double layer  ",
    // description has to be finished
    manufacturedBy:
      "VIJAYA LAKSHMI READYMADE AND INNER ZONE BSNL Office Road Narasaraopet, Guntur D.T AndhraPradesh",
    email: "prgarments.official@gmail.com",
    contact: "+91 92 9083 9084 ",
  },
];

const ProductsListContext = React.createContext({
  listItems: productsList,
  activeId: productsList[0].id,
  changeID: () => {},
});

export default ProductsListContext;

/* {
  colorId: "01",
color: "#ffffff",
 },
{
  colorId: "03",
  color: "#000000",
},
{
  colorId: "04",
  color: "#8a0a01",
},
{
  colorId: "05",
  color: "#000080",
},
{
  colorId: "06",
  color: "#992600",
},
{
  colorId: "07",
  color: "#006600",
} */
