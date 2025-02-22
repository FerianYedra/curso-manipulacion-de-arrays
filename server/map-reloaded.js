const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];

console.log('Original: ', orders);

const totals = orders.map(item => item.total);
console.log('Totals: ', totals);

const taxed = orders.map(item =>{
    return {
        ...item,
        tax: 0.19
    };
});
console.log('Tax: ', taxed);