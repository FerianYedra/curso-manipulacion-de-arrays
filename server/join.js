const elements = ['Fire', 'Air', 'Water'];

let answer = '';
const separator = '--'
for(let i = 0; i < elements.length; i++){
    const element = elements[i];
    if(i == elements.length - 1){
        answer += element
    }else{
        answer += element + separator;
    }
}

console.log(answer);

const joinElements = elements.join('--');
console.log(joinElements);

const title = 'Curso de Manipulación de Arrays';
const array = title.split(' ');
console.log(array);