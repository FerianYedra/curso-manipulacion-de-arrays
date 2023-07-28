const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const newArray = [];
for(let i = 0; i < matrix.length; i++){
    const array = matrix[i];

    for(let j = 0; j < array.length; j++){
        const element = array[j];

        newArray.push(element);
    }
}

console.log(newArray);

const flatArray = matrix.flat(1);
console.log(flatArray);