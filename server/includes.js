const pets = ['cat', 'dog', 'bat'];

let include = false;
for(let i = 0; i < pets.length; i++){
    const element = pets[i];

    if(element === 'dog'){
        include = true;
        break;
    }
}

console.log(include);

const isDog = pets.includes('dog');
console.log(isDog);