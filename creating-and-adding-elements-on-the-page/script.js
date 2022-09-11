// createElement
const div = document.createElement('div');
div.innerText = 'Hello!';
// append prepend
const body = document.querySelector('body');
// Add element after all
body.append(div);
// Add the element first
body.prepend(div);

// insertBefore - insertBefore takes two arguments, first I put the element I want to insert, then I put a reference element
const bodyBefore = document.querySelector('body');
const script = body.querySelector('script');
bodyBefore.insertBefore(div, script);
// To insert after:
const header = body.querySelector('header');
bodyBefore.insertBefore(div, header.nextElementSibling);
