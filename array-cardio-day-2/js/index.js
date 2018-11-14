const people = [{name: "Wes", year: 1988}, {name: "Kait", year: 1986}, {name: "Irv", year: 1970}, {name: "Lux", year: 2015}];

const comments = [{text: "Love this!", id: 523423}, {text: "Super good", id: 823423}, {text: "You are the best", id: 2039842}, {text: "Ramen is my fav food ever", id: 123523}, {text: "Nice Nice Nice!", id:542328}];

//Array.prototype.some()
//is at least one person 19?
const isAdult = people.some(person => ((new Date().getFullYear()) - person.year >= 19));
console.log({isAdult});
document.getElementById("nineteen").innerHTML = isAdult;

//Array.prototype.every()
//is everyone 19?
const allAdults = people.every(person => ((new Date().getFullYear()) - person.year >= 19));
console.log({allAdults});
document.getElementById("allNineteen").innerHTML = allAdults;

//Array.prototype.find()
//Find is like filter, but instead returns just the one you are looking for
//find the comment with the ID 823423

const comment = comments.find(comment => comment.id === 823423);
console.log(comment);
document.getElementById("findComment").innerHTML = JSON.stringify(comment);

//Array.prototype.findIndex()
//Find the comment with the ID 823423
//delete the comment with the ID 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
document.getElementById("findIndex").innerHTML = index;

//comments.splice(index, 1)
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(newComments);
document.getElementById("newComment").innerHTML = JSON.stringify(newComments);