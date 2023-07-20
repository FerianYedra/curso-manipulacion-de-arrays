const letters = ['a', 'b', 'c'];

/*
const newArray = [];
for (let i = 0; i < letters.length; i++){
    const element = letters[i];
    newArray.push(element + '++'); //De esta forma letters se mantiene inmutable
}
*/

const newArray = letters.map(item => item + '++');

console.log('Original: ', letters);
console.log('Transformado: ', newArray);