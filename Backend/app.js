var express = require("express");
var app = express();
var port = 4000;
var bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());
const User=require("./model/form.models")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connect = require('./db/db');

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authortization');
//     res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
// });

app.get("/all", async (req, res) => {
    try{
        const allUserData=await User.find({})
        res.status(200).json(allUserData)
    }catch(err){
        res.status(400).send(err)
    }
});

app.post("/addname", async (req, res) => {
    try{
        const myData=await User.create(req.body)
        return res.status(201).json({data:myData})
    }catch(err){
        res.status(401).send(err)
    }
});

const start=async()=>{
    const con=await connect();
    console.log("Connected to database")
    app.listen(port,()=>{
    console.log(`Listening On port ${port}`)
 })
}
start()