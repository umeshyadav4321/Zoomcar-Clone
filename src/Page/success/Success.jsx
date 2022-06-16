import React from "react";
import { Link } from "react-router-dom";
import {v4 as uuid} from "uuid";

export const Success = ()=>{
    return(
        <>
            <div style={{textAlign:"center",
            marginTop:"8%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            lineHeight:"40px",width:"60%",margin:"auto",
            padding:"20px",marginTop:"70px",marginBottom:"80px"}}>
                <img style={{width:"100px"}} src="https://th.bing.com/th/id/OIP.4hCFsRIv_ynvaFadf9Q7UwHaGP?w=246&h=206&c=7&r=0&o=5&pid=1.7"/>
                <h1 style={{color:"teal"}}>You're all set!</h1>
                <p>Your Order ID : #{uuid()}</p>
                <p style={{fontSize:"30px",color:"green"}}><b>Thanks for being Awesome,<br></br>We hope you enjoyed your Ride!</b></p>
               <Link to="/"> <button style={{borderRadius:"15px",backgroundColor:"rgb(93,118,112)",color:"white",fontSize:"25px",padding:"10px",border:"none",margin:"18px"}}>Go To Home</button></Link>
            </div>
        </>
    )
}