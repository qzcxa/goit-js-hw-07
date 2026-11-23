'use strict';

const categorie = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categoties: ${categorie.length}`);

categorie.forEach(categorie => {
  const title = categorie.querySelector('h2').textContent;
  const itemCount = categorie.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});
