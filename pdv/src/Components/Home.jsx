import React, { useEffect } from "react";
import "../Styles/Home.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
export const Home = () => {
  const [user, setUser] = useState({
    name: "",
    demo: "",
    source: "",
    addedby: "",
    date: "",
    set: "",
    howmany: "",
  });
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("enter in send data");
    const userObject = {
      name: user.name,
      demo: user.demo,
      source: user.source,
      addedby: user.addedby,
      date: user.date,
      set: user.set,
      howmany: user.howmany,
    };
    console.log("userObject", userObject);

    axios
      .post("http://localhost:4000/addname", userObject)
      .then((res) => {
        console.log("resut", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setUser({
      name: "",
      demo: "",
      source: "",
      addedby: "",
      date: "",
      set: "",
      howmany: "",
    });
    getDataHandler();
  };

  const getDataHandler = () => {
    axios
      .get("http://localhost:4000/all")
      .then((res) => {
        console.log("resut", res.data);
        setRecords(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataHandler();
  }, []);
  return (
    <>
     

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form action="" onSubmit={handleSubmit}>
              <h1>Add Prospect Set</h1>
              <input className="nam"
                type={"text "}
                value={user.name}
                onChange={handleInput}
                placeholder="Name Prospect Set "
                name="name"
              ></input>
              <br />
              <input  className="nam"
                type={"text"}
                value={user.demo}
                onChange={handleInput}
                placeholder="Add Demographic "
                name="demo"
              ></input>
              <br />
              <input  className="nam"
                type={"text"}
                value={user.source}
                onChange={handleInput}
                placeholder="Source "
                name="source"
              ></input>
              <br />
              <input  className="nam"
                type={"text"}
                value={user.addedby}
                onChange={handleInput}
                placeholder="addedby "
                name="addedby"
              ></input>
              <br />
              <input  className="nam"
                type={"date"}
                value={user.date}
                onChange={handleInput}
                name="date"
              ></input>
              <br />
              <input  className="nam"
                type={"text"}
                value={user.set}
                onChange={handleInput}
                placeholder="Set Type "
                name="set"
              ></input>
              <br />
              <input  className="nam"
                type={"number"}
                value={user.howmany}
                onChange={handleInput}
                placeholder="How Many"
                name="howmany"
              ></input>
              <br />
              <Button
                type="submit"
                variant="outlined"
                style={{
                  marginTop: "10px",
                  color: "white",
                  backgroundColor: "black",
                  width: 200,
                  marginBottom: "5px",
                }}
              >
                Add Prospect Set
              </Button>
            </form>
          </div>
        </div>
      )}

      <div className="table">
        <div className="name">
          <span>Prospect Set</span>
          <br />
        </div>
        <div className="top">
          <span className="cus">Customer</span>
          <span className="cus">Prospect Customer</span>
          <span className="cus">Employee</span>
          <span className="cus">Test Set</span>
        </div>
        <div className="search">
          <input
            className="srch"
            type="Search  "
            placeholder="Search Prospect Set"
          ></input>
        </div>

        <div className="head">
          <span className="head1">Prospect Name</span>
          <span className="head1">Demographic</span>
          <span className="head1">Source</span>
          <span className="head1">Added By</span>
          <span className="head1">Date Added</span>
          <span className="head1">Set Type</span>
          <span className="head1">How Many</span>
          <span className="head1">Details</span>
        </div>
        <div>
          {records.map((curElem) => {
            return (
              <div className="navbar1">
                <p>☐ {curElem.name}</p>
                <p>{curElem.demo}</p>
                <p>{curElem.source}</p>
                <p>{curElem.addedby}</p>
                <p>{curElem.date}</p>
                <p>{curElem.set}</p>
                <p>{curElem.howmany}</p>
                <p>Info</p>
              </div>
            );
          })}
        </div>
        <div className="bottom">
          <span className="bot" onClick={toggleModal}>
            Add Prospect Set
          </span>
          <span className="bot">Delete Prospect Set</span>
          <span className="bot">Edit Prospect Set</span>
          <span className="bot">Import Prospect Set</span>
        </div>
      </div>
    </>
  );
};
