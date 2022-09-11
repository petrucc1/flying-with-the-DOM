// textContent - Changes the text content or can be added with +=
const element = document.querySelector('h1');
element.textContent = "Olá, Dev's!";

// innerText - Change the inner text of the HTML
const element = document.querySelector('h1');
element.innerText = "Olá, Dev's!";

// innerHTML - Swap the internal HTML content
const element = document.querySelector('h1');
element.innerHTML = "Olá, <small>Dev's!</small>";

// value - Manipulate the value of an input
const element = document.querySelector('input');
element.value = "Valor qualquer";
// It is possible to check the existing value
console.log(element.value);

// Manipulating attributes
const header = document.querySelector('header');
header.setAttribute('id', 'header');

const headerID = document.querySelector('#header');
// Check the attribute
console.log(headerID.getAttribute('id'));
// Remove attribute
header.removeAttribute('id');
// Add class
header.setAttribute('class', 'bg header');
