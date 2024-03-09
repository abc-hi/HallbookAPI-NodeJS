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
            <li>API Endpoint for list all rooms: <strong>GET</strong> <a href="http://localhost:4000/api/get-room">http://localhost:4000/api/get-room</a></li>
            <li>API Endpoint for all rooms with booked details: <strong>GET</strong> <a href="http://localhost:4000/api/booked-room">http://localhost:4000/api/booked-room</a></li>
            <li>API Endpoint for list all customers with booked data: <strong>GET</strong> <a href="http://localhost:4000/api/get-customerdata">http://localhost:4000/api/get-customerdata</a></li>
            <li>API Endpoint for how many customers have booked: <strong>GET</strong> <a href="http://localhost:4000/api/book-count">http://localhost:4000/api/book-count</a></li>
            <li>API Endpoint for creating a new room: <strong>POST</strong> <a href="http://localhost:4000/api/create-room">http://localhost:4000/api/create-room</a></li>
            <li>API Endpoint for booking room: <strong>POST</strong> <a href="http://localhost:4000/api/book-room">http://localhost:4000/api/book-room</a></li>
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

