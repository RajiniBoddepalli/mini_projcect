import React from "react";
import './Complaints.css';
import { useState } from "react";

const Complaints=()=>{
    const [data,setData] = useState(
        {name:"", email:"", phone:"" , message:""});
        const handleChange = (e) =>{
                const name = e.target.name;
                const value = e.target.value;
                setData({...data, [name]:value})
        }
        const handleSubmit =(e)=>{
                e.preventDefault()
                console.log(data)
        }
    return(
        <form className="form1" method="post" onSubmit={handleSubmit}>
            <h1 className="com1">Complaint <span>Here</span></h1>
            <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter Your Name" className="inp1"/>
            <input type="text" name="number" id="" onChange={handleChange} value={data.number} placeholder="Enter Your Registration Number" className="inp1"/>
            <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="+91" className="inp1"/>
            <textarea name="message" id="" cols="30" onChange={handleChange} rows="10" value={data.message} placeholder="type your complaints here..." className="inp1"/>
            <button type="submit">Send</button>
            {/* <p>{data.name},{data.number},{data.phone},{data.message}</p> */}
            </form>


    )
}

export default Complaints;


