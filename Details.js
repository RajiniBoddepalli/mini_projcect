import React, { useState } from "react";
import './Details.css'
function Details(){
    const [cards] = useState([
        {
            title:'Room Details',
            text:'Where you can view the bookings of the hostels by the students.'
        },
        {
            title:'Student Search',
            text:'Where you can view the particular student details about hostels.'
        },
        {
            title:'View Complaints',
            text:'Where you can view the complaints about hostels by the students.'
        }

    ])
    return(
        <div>
            <section className="sectio1">
                <div className="cont">
                {/* <h1>Responsive Cards</h1> */}
                    <div className="cards">
                        {
                            cards.map((card,i)=>(
                                <div key={i} className="card">
                                
                                <h3>
                                    {card.title}
                                </h3>
                                <p>
                                    {card.text}
                                </p>
                                <button className="btn ">
                                    <a href="/Bookings">View More</a>
                                    </button>                           
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Details;