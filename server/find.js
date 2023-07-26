const numbers = [1, 30, 49, 29, 10, 13];

let answer = undefined;
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];

    if(element === 30){
        answer = element;
        break;
    }
}

console.log(answer);

const find30 = numbers.find(item => item === 30);
console.log(find30);

