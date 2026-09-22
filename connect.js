const mongoose = require("mongoose");

function connect(){
    mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
}

module.exports = connect;