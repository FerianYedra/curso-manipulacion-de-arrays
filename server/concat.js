const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for(let i = 0; i < otherElements.length; i++){
    const element = otherElements[i];

    newArray.push(element);
}

console.log(newArray);

const concatArray = elements.concat(otherElements);
console.log(concatArray);