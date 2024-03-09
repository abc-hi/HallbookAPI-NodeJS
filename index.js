// import express from 'express';
const express = require("express")
// import hallrouter from './Routers/hallbook-router.js';
const hallrouter = require("./Routers/hallbook-router.js")



const app =express();
const PORT=4000;

    
app.get('/', (req, res) => {
    const endpoints = `
        <h2>API Endpoints:</h2>
        <ul>
        <li>API Endpoint for list all rooms: <strong style="color: green;">GET</strong>  <h4 style="color: green;">http://localhost:4000/api/get-room</h4></li>
        <li>API Endpoint for all rooms with booked details: <strong style="color: green;">GET</strong>  <h4 style="color: green;">http://localhost:4000/api/booked-room</h4></li>
        <li>API Endpoint for list all customers with booked data: <strong style="color: green;">GET</strong> <h4 style="color: green;">http://localhost:4000/api/get-customerdata</h4></li>
        <li>API Endpoint for how many customers have booked: <strong style="color: green;">GET</strong>  <h4 style="color: green;">http://localhost:4000/api/book-count</h4></li>
        <li>API Endpoint for creating a new room: <strong style="color: green;">POST</strong>  <h4 style="color: green;">http://localhost:4000/api/create-room</h4></li>
        <li>API Endpoint for booking room: <strong style="color: green;">POST</strong> <h4 style="color: green;">http://localhost:4000/api/book-room</h4></li>
    </ul>
    `;
    res.send(endpoints);});    


// app.get('/',(req,res)=>{
//     res.status(200).send("API is working")
// })
// app.use("/",AppRoutes)
app.use(express.json())
app.use('/api',hallrouter)



app.listen(PORT,()=>{
console.log("App is running the PORT", PORT);
})

