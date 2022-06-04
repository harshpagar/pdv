import React from "react";
import '../Styles/Home.css';
import { Navbar } from "./Navbar";
import { useState } from "react";
import Button from '@mui/material/Button';


export const  Home = () => 
{
    const [user,setUser] = useState({
        name:"",
        demo:"",
        source:"",
        addedby:"",
        date:"",
        Set:"",
        howmany:"",

    })

    const [records , setRecords] = useState([])

    const handleInput =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name , value);

        setUser ({ ...user, [name]: value });
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        const newData = {...user }
        console.log(records)
        setRecords([...records, newData])
        console.log(records)

        setUser({ name:"",demo:"",source:"",addedby:"",date:"",Set:"",howmany:"",})
    }

    return (
        <>
        <Navbar/>
        <form action ="" onSubmit={handleSubmit}>
            <h1>Add Prospect Set</h1>
            <input type={"text "} value ={user.name} onChange= {handleInput} placeholder="Name Prospect Set "  name="name"></input><br/>
            <input type={"text "} value ={user.demo} onChange= {handleInput} placeholder="Add Demographic "  name="demo"></input><br/>
            <input type={"text "} value ={user.source} onChange= {handleInput} placeholder="Source "   name="source"></input><br/>
            <input type={"text "} value ={user.addedby} onChange= {handleInput} placeholder="addedby "   name="addedby"></input><br/>
            <input type={"number "} value ={user.date} onChange= {handleInput}   name="date"></input><br/>
            <input type={"text "} value ={user.Set} onChange= {handleInput} placeholder="Set Type "   name="Set"></input><br/>
            <input type={"number "} value ={user.howmany} onChange= {handleInput} placeholder="How Many"   name="howmany"></input><br/>
            <Button  type="submit" variant="outlined" style={{marginTop:"10px", color: "white",backgroundColor: "black",width:200,marginBottom:"5px"}}>
                    Add Prospect Set
            </Button>  
        </form>

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

            <div className="head">
                <span  className="head1">Prospect Name</span>
                <span className="head1">Demographic</span>
                <span className="head1">Source</span>
                <span className="head1">Added By</span>
                <span className="head1">Date Added</span>
                <span className="head1">Set Type</span>
                <span className="head1">How Many</span>
                <span className="head1">Details</span>
            </div>
            <div>
            {
                records.map((curElem) => {
                    return (
                        <div className='navbar1'>
                            <p>{curElem.name}</p>
                            <p>{curElem.demo}</p>
                            <p>{curElem.source}</p>
                            <p>{curElem.addedby}</p>
                            <p>{curElem.date}</p>
                            <p>{curElem.Set}</p>
                            <p>{curElem.howmany}</p>
                            <p>Info</p>
                        </div>
                    )
                })
            }
            </div>
            <div className="bottom">
                <span className="bot">Add Prospect Set</span>
                <span className="bot">Delete Prospect Set</span>
                <span className="bot">Edit Prospect Set</span>
                <span className="bot">Import Prospect Set</span>
            </div>
        </div>


        </>
    )
}