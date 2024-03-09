
// import {format} from 'date-fns';
const format = require("date-fns")




let rooms=[{room_id:1,
    room_name:"abc-1",
    room_status:"available",
    room_amenities:"TV, Iron box,Washing macine",
    seats:4,
    price_per_hrs:1000

},
{room_id:2,
    room_name:"abc-2",
    room_status:"available",
    room_amenities:"TV, Iron box,Washing macine",
    seats:4,
    price_per_hrs:2000

},
{room_id:3,
    room_name:"abc-3",
    room_status:"available",
    room_amenities:"TV, Iron box,Washing macine",
    seats:8,
    price_per_hrs:1500

},
{room_id:4,
    room_name:"abc-4",
    room_status:"available",
    room_amenities:"TV, Iron box,Washing macine",
    seats:7,
    price_per_hrs:1000

},
{room_id:5,
    room_name:"abc-5",
    room_status:"available",
    room_amenities:"TV, Iron box,Washing macine",
    seats:5,
    price_per_hrs:2000

}
]
let bookingRoom=[]
//booking room
const bookRoom =(req,res)=>
{
    try{
        let { customer_name,date, start_time, end_time,roomID}=req.body;
        let room=rooms.filter((e)=>e.room_status === 'available' && e.room_id == roomID)
        console.log(room);
        if((!room)){
            return res.status(400).json({
                message:'Room is not available'
            })
        }
        else{
            let bookingRoomsdate = bookingRoom.filter((room)=>room.booking_date === date)
            if(bookingRoomsdate.length > 0){
                console.log('true block');
                return res.status(400).json({
                    message:'Date is not Available'
                })
            }else{
                console.log('false block');
                let booking={
                    customer_name,
                    start_time,
                    end_time,
                    roomID,
                    Date:date,
                    booking_id:bookingRoom.length + 1,
                    booking_date:date,
                    status:"booked" 

                }
            }bookingRoom.push(booking)
            return res.status(200).json({
                message:"Room is booked successfully",
                BookingRoom:bookingRoom,
            })
        }
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error",

        })
    }
}
//  module.exports =bookRoom;
//create room
const createRoom=(req,res)=>{
    try{
        let id=rooms.length ? rooms[rooms.length - 1].room_id + 1 :1;
        req.body.room_id=id;
        rooms.push(req.body)
        res.status(200).json({message:"Room Created successfully",
    Room:rooms})

    }catch(error){
        res.status(500).json({
            comment:'Internal Server Error'
        })

    }
}
// module.exports =createRoom;
//booked room
const bookedRoom =(req,res)=>{
    try{
        res.status(200).json({
            message:"Successfully Fetched All Rooms with Booked details",
            bookingRoom
        })
        
    }
    catch(error){
        res.status(500).json({
            comment: 'Internal Server Error'

        })
    }
}
// module.exports =bookedRoom;

//get all room
const getAllRoom = (req,res)=>{
    try{
        res.status(200).json({
            comment:"Fetch All Rooms successfully",
            rooms
        })}
        catch (error){
            res.status(500).json({
                comment:"internal Server Error"
            })
        }
    }
    // module.exports =getAllRoom;


    
    // All customer with Room Data

    const getAllCustomerData = (req,res)=>{
        try{
const customerList = bookingRoom.map((booking)=>{
    const room =rooms.find((r)=>r.room_id ===booking.roomID)
    return{
        Customer_Name:booking.customer_name,
        Room_Name:room ? rooms.room_name : null,
        Date:booking.Date,
        start_time:booking.start_time,
        end_time:booking.end_time
    }
})
res.status(200).json({
    message:"successfully fetched all customer with booked details",
    customerList
})
        }catch(error){
            res.status(500).json({
                comment:'Internal Server Eror'
            })
        }
    }
    

    // module.exports=getAllCustomerData;

    //booking count
    const bookCounts=(req,res) => {
        try{
            const {customer_name}=req.params;
            console.log('Requested Customer Name:', customer_name);
            const customerBooking = bookingRoom.filter((e)=>{
                console.log('Booking customer Name:', e.customer_name);
                return e.customer_name===customer_name;
            })
            console.log('Customer Booking:', customerBooking);
            res.status(200).json({
                message:'Successfully fetched',
                customer_name,
                booking_count:bookingRoom.length,
                bookings:bookingRoom
            });
    
        }catch(error){
            console.error('Error in bookCount:', error);
            res.status(500).json({
                comment:'Internal Server Error'
            })
        }
    }
    module.exports ={bookCounts,createRoom,bookRoom,bookedRoom,getAllCustomerData,getAllRoom}
    
    
       



               