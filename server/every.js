const numbers = [1, 30, 49, 29, 10, 13];

let answer = true;
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];

    if(element >= 40){
        answer = false;
    }
}

console.log(answer);

const isNumber = numbers.every(item => item >= 40);
console.log(isNumber);