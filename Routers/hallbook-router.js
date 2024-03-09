// import express from 'express';


const controller = require("../Controllers/hallbook-controller.js")
const express = require("express");


const router=express.Router()
router.post('/create-room', controller.createRoom)
router.get('/get-room', controller.getAllRoom)
router.post('/book-room', controller.bookRoom)
router.get('/booked-room', controller.bookedRoom)
router.get('/get-customerdata', controller.getAllCustomerData)
router.get('/book-count',  controller.bookCounts)




module.exports=router;

