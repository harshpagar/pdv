import React from "react";
import '../Styles/Home.css';
import { Navbar } from "./Navbar";


export const  Home = () => 
{

    return (
        <>
        <Navbar/>
        

        <div className="table">
            <div className="name">
                <span >Prospect Set</span><br/>
            </div>
           <div className="top">
                <span className="cus">Customer</span>
                <span className="cus">Prospect Customer</span>
                <span className="cus">Employee</span>
                <span className="cus">Test Set</span>
            </div>
            <div className="search">
                <input className="srch" type="search" placeholder="Search"></input>
            </div>               
           
        </div>


        </>
    )
}