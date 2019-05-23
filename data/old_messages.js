module.exports = [
    {
        _id: Math.round(Math.random()*1000000),
        text: 'Yes, and I use iftedD ',
        createdAt: new Date(Date.UTC(2016,7,30,17,20,0)),
        user:{
            _id:1,
            name: 'Developer',
        },
        sent: true,
        received: true,

    },
    {
        _id: Math.round(Math.random()*1000000),
        text: 'Are you building',
        createdAt: new Date(Date.UTC(2016,7,30,17,20,0)),
        user:{
            _id:2,
            name: 'Oops',
        },
    },
    {
        _id: Math.round(Math.random()*1000000),
        text: 'System image',
        createdAt: new Date(Date.UTC(2016,7,30,17,20,0)),
        system: true,
    },
];