// parentElement e parentNode
const element = document.querySelector('body');
// Returns the parent node of this element
element.parentNode;
element.parentElement;

// Getting child elements
// childNodes - get all the children in NodeList format
element.childNodes;
// children - returns in HTMLCollection, ignoring empty spaces
element.children;
// firstChild - takes into account empty space
element.firstChild;
// firstElementChild - does not account for empty space
element.firstElementChild;
// lastChild - returns the last element
element.lastChild;
// lastElementChild - returns the last element
element.lastElementChild;

// Looking for brothers
// nextSibling - takes into account empty space
const el = document.querySelector('header');
el.nextSibling;
// nextElementSibling - does not account for empty space
el.nextElementSibling;
// previousSibling - takes into account empty space
const elmnt = document.querySelector('body script');
elmnt.previousSibling;
// previousElementSibling - does not account for empty space
elmnt.previousElementSibling;
