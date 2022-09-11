// Adding events via HTML
function print() {
    console.log('print');
}
// onclick - something happens when the element is clicked
// ondbclick - something happens when element is double clicked
// ondrag - something happens when the element is dragged
// onmouseover - something happens when the mouse enters the element area

// Keyboard events
const input = document.querySelector('input');
input.onkeydown = function() {
    console.log('OK!');
}
// onkeydown - the onkeydown is fired as soon as the key is pressed, thus being the first among the events to be fired
// onkeypress - then it's onkeypress's turn, that is, while the key is being pressed
// onkeyup - and lastly, when the key is released, the onkeyup event is executed

// Adding events via JS - takes two arguments, first the event type and then the name of the function that will be executed
const h1 = document.querySelector('h1');
h1.addEventListener('click', print);

// Adding events via JS (Other methods)
h1.onclick = print;

h1.addEventListener('click', function() {
    console.log('Yes!');
})

// Event argument
const input = document.querySelector('input');
input.onkeypress = function(event) {
    console.log(event.currentTarget);
};
// event.key - returns the typed letter
// event.currentTarget - returns the event target - the input
// event.currentTarget.value - returns the value that exists in the input

