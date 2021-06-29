import data from "../js/menu.json";
import cardTemplate from "../partials/cardtemplate.hbs";


const cardList = document.querySelector(".js-menu");

cardList.innerHTML = cardTemplate(data);