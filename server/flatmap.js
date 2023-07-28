const users = [
    {userId: 1, username: 'Tom', attributes: ['Nice', 'Cute']},
    {userId: 2, username: 'Mike', attributes: ['Loveley']},
    {userId: 3, username: 'Nico', attributes: ['Nice', 'Cool']}
];

const userAtributtes = users.map(user => user.attributes).flat(1);
console.log(userAtributtes);

const flatMapAttributes = users.flatMap(user => user.attributes);
console.log(flatMapAttributes);

//---------------------------------------------------------------------------------------------------
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };
  
const calendarsArray = Object.values(calendars).flatMap(item => item.map(date => date.startDate));
console.log(calendarsArray);