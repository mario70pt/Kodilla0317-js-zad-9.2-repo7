var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames)
console.log(allNames);
var newName = 'Marian';
var newName = allNames.push('Marian');
if (allNames.indexOf(newName) === -1) {
    console.log(allNames);
}