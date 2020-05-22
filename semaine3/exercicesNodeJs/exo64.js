let tab = [1, 3, 6, 8, 9];
let element = 5;
for (let i = 0; i < tab.length; i++) { tab[i] === element ? console.log(true) : console.log(false); };
const string = "abbbaaaabaaabb";
const caractere='ab';
var j=0;
for (let i = 0; i < string.length - 1; i++) { 
    let a= string[i]+string[i+1];
    a === caractere ? j++: false;
    console.log(a)
};
console.log(j);
