"use strict";
/*
VARIABLES
*/

/*
let catList = "";
let content = "";
let contentLi_001 = "";
let contentLi_002 = "";
let contentLi_003 = "";

catList = document.querySelector(".js-list");

contentLi_001 = `<li class="card card_001">
<article>
  <img
    class="card_img"
    src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">British Shorthair</h4>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>`

contentLi_002=`<li class="card card_002">
<img
  class="card_img"
  src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`

contentLi_003=`<li class="card card_003">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`


content = contentLi_001 + contentLi_002 + contentLi_003;
catList.innerHTML = content;
*/

document.querySelector(".js-new-form").classList.remove("collapsed");

// exercise 2.2. Trabajar con variables e interpolarlas y Bonus: Convertir cadenas de carácteres.

document.querySelector(".js-new-form").classList.remove("collapsed");

//kittenone

const kittenImageOne = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenNameOne = "anastacio";
//mayúsculas
const nameCapitalizedOne =
  kittenNameOne.charAt(0).toUpperCase() + kittenNameOne.slice(1);
const kittenDescOne =
  "Ruiseño,cariñoso y juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceOne = "British Shorthair";

//kittentwo

const kittenImageTwo =
  "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenNameTwo = "fiona";
//mayúsculas
const nameCapitalizedTwo =
  kittenNameTwo.charAt(0).toUpperCase() + kittenNameTwo.slice(1);
const kittenDescTwo =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceTwo = "British Shorthair";

//kittenthree

const kittenImageThree =
  "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenNameThree = "cielo";
//mayúsculas
const nameCapitalizedThree =
  kittenNameThree.charAt(0).toUpperCase() + kittenNameThree.slice(1);
const kittenDescThree =
  "Ruiseño, juguetón,cariñoso le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceThree = "British Shorthair";

const list = document.querySelector(".js-list");

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImageOne}"
    alt="gatito"
  />
  <h3 class="card_title">${nameCapitalizedOne}</h3>
  <h4 class="card_race">${kittenRaceOne}</h4>
  <p class="card_description">
    ${kittenDescOne}
  </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src=${kittenImageTwo}
  alt="gatito"
/>
<h3 class="card_title">${nameCapitalizedTwo}</h3>
<h4 class="card_race">${kittenRaceTwo}</h4>
<p class="card_description">
${kittenDescTwo}
</p>
</li>
`;

const kittenThree = `<li class="card">
<img
class="card_img"
src=${kittenImageThree}
alt="gatito"/>
<h3 class="card_title">${nameCapitalizedThree}</h3>
<h4 class="card_race">${kittenRaceThree}</h4>
<p class="card_description">
${kittenDescThree}
</p>
</li>
`;

//list.innerHTML= kittenOne + kittenTwo + kittenThree;

// Adakitten day 3

const input_search_desc = document.querySelector(".js_in_search_desc");

input_search_desc.value = "cariñoso";

const descrSearchText = input_search_desc.value;

if (kittenDescOne.includes(descrSearchText)) {
  list.innerHTML += kittenOne;
}
if (kittenDescTwo.includes(descrSearchText)) {
  list.innerHTML += kittenTwo;
}

if (kittenDescThree.includes(descrSearchText)) {
  list.innerHTML += kittenThree;
}
