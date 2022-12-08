const mongoose = require("mongoose");

const dbconnect = async () => {

    try {
        
        await mongoose.connect("mongodb://localhost:27017/BookshalaAPI",{
            useUnifiedTopology : true,
            useNewUrlParser : true,
        });

        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbconnect;