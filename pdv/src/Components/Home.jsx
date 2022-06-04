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
                <span>Customer</span>
                <span>Prospect Customer</span>
                <span>Employee</span>
                <span>Test Set</span>
           </div>
           
        </div>


        </>
    )
}