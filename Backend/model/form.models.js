const mongoose=require("mongoose")
var nameSchema = new mongoose.Schema({
    name: String,
    demo: String,
    source: String,
    addedby: String,
    date: String,
    set: String,
    howmany: String
   });

var User = mongoose.model("user", nameSchema);
module.exports =User; 