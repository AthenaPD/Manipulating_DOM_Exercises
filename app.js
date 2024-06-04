// 1. Select the section with an id of container without using querySelector.

const secid = document.getElementById('container');
console.dir(secid);

// 2. Select the section with an id of container using querySelector.
const secid2 = document.querySelector('#container');
console.dir(secid2);

// 3. Select all of the list items with a class of “second”.
const scnd = document.querySelectorAll('.second');
console.dir(scnd);

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const ol3 = document.querySelector('ol .third');
console.dir(ol3);

// 5. Give the section with an id of container the text “Hello!”.
let secid3 = document.querySelector('#container');
secid3.innerText = "Hello!"

// 6. Add the class main to the div with a class of footer.
let ftr = document.querySelector(".footer");
ftr.classList.add('main');
console.dir(ftr);

// 7. Remove the class main on the div with a class of footer.
ftr.classList.remove('main');
console.dir(ftr);

// 8. Create a new li element.
const newli = document.createElement("li");
console.dir(newli);

// 9. Give the li the text “four”.
newli.innerText = 'four';
console.dir(newli);

// 10. Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(newli);
console.dir(ul);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const ols = document.querySelectorAll('ol li');
for (let ol of ols) {
    ol.style.backgroundColor = 'green';
}

// 12. Remove the div with a class of footer
const ftr2rm = document.querySelector(".footer");
ftr2rm.remove();
