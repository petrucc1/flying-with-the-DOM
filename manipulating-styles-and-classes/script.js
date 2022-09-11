// Changing styles with style
const element = document.querySelector('body');
element.style.backgroundColor = "#F9F3D2";
console.log(element.style.backgroundColor);

// classList
const element = document.querySelector('body');
// Add the class
element.classList.add('active');
// Remove the class
element.classList.remove('active');
// Checks if it has the class, if there is one, it removes it, if not, it adds it
element.classList.toggle('active');
