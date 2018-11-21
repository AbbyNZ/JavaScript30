const dogs = [{name: 'Snickers', age: 2}, {name:'hugo', age: 8}];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = "#BADA55";
  p.style.fontsize = '50px';
}

//Regular
console.log('hello');

//Interplated
console.log('Hello I am a %s string!', '+po');

//styled
console.log('%c I am some great text', 'font-size:50px; background: blue; text-shadow: 5px 5px 0 black');

//Warning
console.warn("This is a warning.");

//Error
console.error("Error");

//Info
console.info('Crododiles eat 3-4 people per year.');

//Testing
console.assert(1 === 2, 'That is wrong!');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

//Clearing