var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = 'Marian';
if (allNames.indexOf('Marian') === -1) {
    allNames[8] = 'Marian';
    console.log(allNames);
}