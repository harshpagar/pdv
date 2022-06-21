const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://pdv:pdv@cluster0.ned56.mongodb.net/assignmentdb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connect;
