const express = require('express')

const app  = express();

app.get('/me', (request, response) => {
    response.status(200).json({
        name: 'Antony',
        age: 21,
        country: 'Perú'
    })
})

app.post('/metas', (request, response) => {
    response.status(200).json({
        hobies: ['read', 'sing', 'program'],
        verb: request.method
    })
})

app.patch('/metas', (request, response) =>{
    response.status(200).json({
        business: [
            'grow professionally',
            'be an expert in web development'
        ],
        verb: request.method
    })
})

app.put('/business',(request, response) => {
    response.status(200).json({
        business: [
            'Facebook',
            'Google'
        ],
        verb: request.method
    })
})

app.listen(8000,()=>{
    console.log('Server started at port 8000');
})