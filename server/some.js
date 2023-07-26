const numbers = [1, 2, 3, 4];

let answer = false;
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];

    if(element % 2 === 0){
        answer = true;
        break;
    }
}

console.log(answer);

const even = numbers.some(item => item % 2 === 0);
console.log(even);

//--------------------------------------------------------------------------------------
//Calendar algorithm
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: 'Cita de Trabajo'
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: 'Cita con mi jefe'
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: 'Cena'
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30)
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {
                start: date.startDate,
                end: date.endDate
            },
            {
                start: newDate.startDate,
                end: newDate.endDate
            }
        );
    });
};

console.log('Is overlap:', isOverlap(newAppointment));