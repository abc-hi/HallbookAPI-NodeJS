// import express from 'express';
const express = require("express")
// import hallrouter from './Routers/hallbook-router.js';
const hallrouter = require("./Routers/hallbook-router.js")



const app =express();
const PORT=4000;

    
    app.get('/', (req, res) => {
        const endpoints = `
            API Endpoint for list all rooms: GET http://localhost:4000/api/get-room
            API Endpoint for all rooms with booked details: GET http://localhost:4000/api/booked-room
            API Endpoint for list all customers with booked data: GET http://localhost:4000/api/get-customerdata
            API Endpoint for how many customers have booked: GET http://localhost:4000/api/book-count
            API Endpoint for creating a new room: POST http://localhost:4000/api/create-room
            API Endpoint for booking room: POST http://localhost:4000/api/book-room
        `;
        res.send(endpoints);
    });

    


// app.get('/',(req,res)=>{
//     res.status(200).send("API is working")
// })
// app.use("/",AppRoutes)
app.use(express.json())
app.use('/api',hallrouter)



app.listen(PORT,()=>{
console.log("App is running the PORT", PORT);
})

