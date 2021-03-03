import { IMenu, IData, IProfile, ISettings } from "../../helpers/types";

import logo from "./logo.png";

import espresso from "./images/espresso.jpg";
import doubleEspresso from "./images/double-espresso.jpg";
import americano from "./images/americano.jpg";
import latte from "./images/latte.jpg";
import cappuccino from "./images/cappuccino.jpg";
import tea from "./images/tea.jpg";
import blueberryMuffin from "./images/blueberry-muffin.jpg";
import chocolateMuffin from "./images/chocolate-muffin.jpg";
import scone from "./images/scone.jpg";
import croissant from "./images/croissant.jpg";
import almondCroissant from "./images/almond-croissant.jpg";
import PAYMENT_METHODS from "../../constants/paymentMethods";

const menu: IMenu = [
  {
    id: "espresso",
    name: "Espresso",
    description: "Small cup with 1 shot",
    price: 2.5,
    image: espresso
  },
  {
    id: "double-espresso",
    name: "Double Espresso",
    description: "Small cup with 2 shots",
    price: 3.0,
    image: doubleEspresso
  },
  {
    id: "americano",
    name: "Americano",
    description: "Large cup with 1 shot and hot water",
    price: 3.0,
    image: americano
  },
  {
    id: "latte",
    name: "Latte",
    description: "Large cup with 1 shot and milk",
    price: 3.5,
    image: latte
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Large cup with 1 shot and foam",
    price: 3.5,
    image: cappuccino
  },
  {
    id: "tea",
    name: "Tea",
    description: "Large cup with loose leaf tea",
    price: 2.5,
    image: tea
  },
  {
    id: "blueberry-muffin",
    name: "Blueberry Muffin",
    description: "Muffin with blueberries",
    price: 2.5,
    image: blueberryMuffin
  },
  {
    id: "chocolate-muffin",
    name: "Chocolate Muffin",
    description: "Muffin with chocolate chips",
    price: 2.5,
    image: chocolateMuffin
  },
  {
    id: "scone",
    name: "Scone",
    description: "Plain scope with jam",
    price: 2.5,
    image: scone
  },
  {
    id: "croissant",
    name: "Croissant",
    description: "Plain croissant",
    price: 2.5,
    image: croissant
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    description: "Croissant with almond filling",
    price: 2.5,
    image: almondCroissant
  }
];

const profile: IProfile = {
  id: "bufficorn-cafe",
  name: "Bufficorn Café",
  description: "Local roasted café in Denver",
  logo,
  type: "cafe",
  country: "US",
  email: "",
  phone: ""
};

const settings: ISettings = {
  taxRate: 11,
  taxIncluded: false,
  taxDisplay: true,
  paymentMethods: PAYMENT_METHODS,
  paymentCurrency: "USD",
  paymentAddress: ""
};

const data: IData = {
  profile,
  settings
};

export default { data, menu };
