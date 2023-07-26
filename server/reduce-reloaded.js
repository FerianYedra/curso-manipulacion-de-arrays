const items = [1, 3, 2, 3];

const hist = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] += 1;
    }
    return obj;
}, {});

console.log(hist);

const data = [
    {
        name: 'Nicolas',
        level: "low",
    },
    {
        name: 'Andrea',
        level: 'medium',
    },
    {
        name: 'Zulema',
        level: 'high',
    },
    {
        name: 'Santiago',
        level: 'low',
    }, 
    {
        name: 'Valentina',
        level: 'medium',
    },
    {
        name: 'Lucia',
        level: 'high',
    },
];

const dataHistogram = data
.map(item => item.level)
.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] += 1;
    }
    return obj;
}, {});

console.log(dataHistogram);