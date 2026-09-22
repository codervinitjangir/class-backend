const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

function connect(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
}

module.exports = connect;