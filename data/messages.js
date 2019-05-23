module.exports = [
    {
        _id: Math.round(Math.random()*1000000),
        text: 'Yes, yup yup',
        createdAt: new Date(Date.UTC(2016,7,30,17,20,0)),
        user:{
            _id:1,
            name: 'Developer',
        },

    },
    {
        _id: Math.round(Math.random()*1000000),
        text: 'Are dirty dung',
        createdAt: new Date(Date.UTC(2016,7,30,17,20,0)),
        user:{
            _id:2,
            name: 'Oops',
        },
    },
    {
        _id: Math.round(Math.random()*1000000),
        text: 'system masaskaks',
        createdAt: new Date(Date.UTC(2016,7,30,17,20,0)),
        system: true,
    },
];