import React from "react";

const Card = ({items}) => {
    console.log(items);
    return (
        <>
            <div className="card m-2" style={{width:"18rem"}}>
                <img src="https://i2-prod.dailystar.co.uk/incoming/article203430.ece/ALTERNATES/s1200c/1_Adult-Star-Who-Started-Porn-During-Covid-Shares-Impact-On-Her-Life.jpg" className="card-img-top" alt="models" />
                <div className="card-body">
                    <h5 className="card-title">{items.name}</h5>
                    <p className="card-text">{items.email}</p>
                    <a href="#" className="btn">{items.phone}</a>
                </div>
            </div>
        </>
    )
}
export default Card