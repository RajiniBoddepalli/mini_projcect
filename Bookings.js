import React from "react";
import './Bookings.css';

function Bookings(){
    const data=[
        {
            S_No:"1",
            Student_Name:"Leelavathi Chandu",
            Hostel_Name:"Mrudhula",
            Room_Number:"101"
    },
        {
           
        S_No:"1",
        Student_Name:"Rajini Boddepalli",
        Hostel_Name:"Srujana",
        Room_Number:"201"
    },
        {
            S_No:"3",
            Student_Name:"Sanvitha Bandi",
            Hostel_Name:"Spoorthi",
            Room_Number:"301"
    },
    {
        S_No:"4",
        Student_Name:"VijayDurga",
        Hostel_Name:"Vaidehi",
        Room_Number:"203"
    },
   
]

    return(
        <div>
            <h1 className="room1">Room Details of the students</h1>
           <table>
            <thead>
                <tr>
                    <th>S_NO</th>
                    <th>Student_Name</th>
                    <th>Hostel_Name</th>
                    <th> Room_Number</th>
                </tr>
            </thead>
            <tbody>
                {
                   data.map((val,i)=>
                   <tr key={i}>
                    <td>{val.S_No}</td>
                    <td>{val.Student_Name}</td>
                    <td>{val.Hostel_Name}</td>
                    <td>{val.Room_Number}</td>
                   </tr>
                   ) 
                }
            </tbody>
           </table>
        </div>
    );
}
export default Bookings;
;